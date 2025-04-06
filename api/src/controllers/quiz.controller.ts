import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  QuizFindOptions,
  quizRepository,
} from '../database/repositories/quiz.repository';
import {
  IQuizAllSchema,
  IQuizIdSchema,
  IQuizCreateSchema,
  IQuizUpdateSchema,
  IAddQuestionsSchema,
} from '../schemas/quiz.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { needRecord } from '../utils/record';
import { quizQuestionRepository } from '../database/repositories/quiz-question.repository';
import { IQuestion } from '../database/models/question.model';
import { createQuestion } from '../services/internal/questions/create';
import { questionRepository } from '../database/repositories/question.repository';
import { subjectRepository } from '../database/repositories/subject.repository';

export class QuizController {
  // Get all Quizzes by author
  public getQuizzes = asyncHandler(
    async (
      req: ParsedRequest<void, IQuizAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: QuizFindOptions = {
        filter: {
          // filters
          teacherId: req.valid.query.teacherId,

          subjectId: req.valid.query.subjectId,

          status: req.valid.query.status,

          dateFrom: req.valid.query.dateFrom,
          dateTo: req.valid.query.dateTo,
        },
        fields: req.valid.query.fields,
        search: req.valid.query.search,
        order: defaultOrderParams(
          req.valid.query.orderColumn,
          req.valid.query.orderDirection,
        ),
        pagination: defaultPaginationParams(
          req.valid.query.page,
          req.valid.query.pageSize,
        ),
      };
      const quizzes = await quizRepository.findForAdmin(options);

      res.ok({ message: 'success', data: quizzes });
    },
  );

  // Get quiz by Id for authenticated user
  public getQuiz = asyncHandler(
    async (
      req: ParsedRequest<void, void, IQuizIdSchema>,
      res: Response,
    ): Promise<void> => {
      const quiz = needRecord(
        await quizRepository.findById(req.valid.params.id),
        new NotFoundError('Quiz not found'),
      );

      res.ok({ message: 'success', data: quiz });
    },
  );

  // Create quiz handler
  public createQuiz = asyncHandler(
    async (
      req: ParsedRequest<IQuizCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newQuiz = req.valid.body;
      const subject = needRecord(
        await subjectRepository.findById(newQuiz.subjectId),
        new NotFoundError('Subject not found'),
      );

      const quiz = await quizRepository.insert({
        teacherId: subject.teacherId,
        ...newQuiz,
      });
      if (quiz === null) {
        throw new InternalError();
      }
      res.created({ message: 'Quiz has been created', data: quiz });
    },
  );

  // Update quiz by Id for authenticated user
  public updateQuiz = asyncHandler(
    async (
      req: ParsedRequest<IQuizUpdateSchema, void, IQuizIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const quiz = needRecord(
        await quizRepository.findById(req.valid.params.id),
        new NotFoundError('Quiz not found'),
      );

      const data = await quizRepository.patchById(quiz.id, updateBody);

      res.ok({ message: 'Quiz has been updated', data });
    },
  );

  // Delete quiz by Id for authenticated user
  public deleteQuiz = asyncHandler(
    async (
      req: ParsedRequest<void, void, IQuizIdSchema>,
      res: Response,
    ): Promise<void> => {
      const quiz = needRecord(
        await quizRepository.findById(req.valid.params.id),
        new NotFoundError('Quiz not found'),
      );

      await quizRepository.deleteById(quiz.id);
      res.noContent({ message: 'Quiz deleted successfully' });
    },
  );

  // Create question handler
  public addQuestions = asyncHandler(
    async (
      req: ParsedRequest<IAddQuestionsSchema, void, IQuizIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const { body } = req.valid;
      const quiz = needRecord(
        await quizRepository.findById(req.valid.params.id),
        new NotFoundError('Quiz not found'),
      );

      const toInsQuestions: IQuestion[] = [];

      if (body.questions) {
        toInsQuestions.push(
          ...(await Promise.all(
            body.questions.map(async (e) => await createQuestion(e)),
          )),
        );
      }

      if (body.questionIds) {
        const questions = await questionRepository.findByIds(body.questionIds);
        toInsQuestions.push(...questions);
      }

      await Promise.all(
        toInsQuestions.map(
          async (question) =>
            await quizQuestionRepository.insert({
              quizId: quiz.id,
              questionId: question.id,
            }),
        ),
      );

      const updatedQuiz = needRecord(await quizRepository.findById(quiz.id));

      res.created({ message: 'Question has been created', data: updatedQuiz });
    },
  );
}
export const quizController = new QuizController();
