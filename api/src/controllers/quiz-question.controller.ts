import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  QuizQuestionFindOptions,
  quizQuestionRepository,
} from '../database/repositories/quiz-question.repository';
import {
  IQuizQuestionAllSchema,
  IQuizQuestionIdSchema,
  IQuizQuestionCreateSchema,
  IQuizQuestionUpdateSchema,
} from '../schemas/quiz-question.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { RoleCode } from '../utils/enum';
import { needRecord } from '../utils/record';

export class QuizQuestionController {
  // Get all QuizQuestions by author
  public getQuizQuestions = asyncHandler(
    async (
      req: ParsedRequest<void, IQuizQuestionAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: QuizQuestionFindOptions = {
        filter: {
          // filters
          quizId: req.valid.query.quizId,

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
      const quizQuestions = await quizQuestionRepository.findForAdmin(options);

      res.ok({ message: 'success', data: quizQuestions });
    },
  );

  // Get quizQuestion by Id for authenticated user
  public getQuizQuestion = asyncHandler(
    async (
      req: ParsedRequest<void, void, IQuizQuestionIdSchema>,
      res: Response,
    ): Promise<void> => {
      const quizQuestion = needRecord(
        await quizQuestionRepository.findById(req.valid.params.id),
        new NotFoundError('QuizQuestion not found'),
      );

      res.ok({ message: 'success', data: quizQuestion });
    },
  );

  // Create quizQuestion handler
  public createQuizQuestion = asyncHandler(
    async (
      req: ParsedRequest<IQuizQuestionCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newQuizQuestion = req.valid.body;
      const quizQuestion = await quizQuestionRepository.insert(newQuizQuestion);
      if (quizQuestion === null) {
        throw new InternalError();
      }
      res.created({
        message: 'QuizQuestion has been created',
        data: quizQuestion,
      });
    },
  );

  // Update quizQuestion by Id for authenticated user
  public updateQuizQuestion = asyncHandler(
    async (
      req: ParsedRequest<
        IQuizQuestionUpdateSchema,
        void,
        IQuizQuestionIdSchema
      >,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const quizQuestion = needRecord(
        await quizQuestionRepository.findById(req.valid.params.id),
        new NotFoundError('QuizQuestion not found'),
      );

      const data = await quizQuestionRepository.patchById(
        quizQuestion.id,
        updateBody,
      );

      res.ok({ message: 'QuizQuestion has been updated', data });
    },
  );

  // Delete quizQuestion by Id for authenticated user
  public deleteQuizQuestion = asyncHandler(
    async (
      req: ParsedRequest<void, void, IQuizQuestionIdSchema>,
      res: Response,
    ): Promise<void> => {
      const quizQuestion = needRecord(
        await quizQuestionRepository.findById(req.valid.params.id),
        new NotFoundError('QuizQuestion not found'),
      );

      await quizQuestionRepository.deleteById(quizQuestion.id);
      res.noContent({ message: 'QuizQuestion deleted successfully' });
    },
  );
}

export const quizQuestionController = new QuizQuestionController();
