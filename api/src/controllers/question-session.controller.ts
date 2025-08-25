import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  QuestionSessionFindOptions,
  questionSessionRepository,
} from '../database/repositories/question-session.repository';
import {
  IQuestionSessionAllSchema,
  IQuestionSessionIdSchema,
  IQuestionSessionCreateSchema,
  IQuestionSessionUpdateSchema,
} from '../schemas/question-session.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { needRecord } from '../utils/record';

export class QuestionSessionController {
  // Get all QuestionSessions by author
  public getQuestionSessions = asyncHandler(
    async (
      req: ParsedRequest<void, IQuestionSessionAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: QuestionSessionFindOptions = {
        filter: {
          // filters
          sessionId: req.valid.query.sessionId,
          bookmarked: req.valid.query.bookmarked,
          status: req.valid.query.status,
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
      const questionSessions =
        await questionSessionRepository.findForAdmin(options);

      res.ok({ message: 'success', data: questionSessions });
    },
  );

  // Get questionSession by Id for authenticated user
  public getQuestionSession = asyncHandler(
    async (
      req: ParsedRequest<void, void, IQuestionSessionIdSchema>,
      res: Response,
    ): Promise<void> => {
      const questionSession = needRecord(
        await questionSessionRepository.findById(req.valid.params.id),
        new NotFoundError('QuestionSession not found'),
      );

      res.ok({ message: 'success', data: questionSession });
    },
  );

  // Create questionSession handler
  public createQuestionSession = asyncHandler(
    async (
      req: ParsedRequest<IQuestionSessionCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newQuestionSession = req.valid.body;
      const questionSession =
        await questionSessionRepository.insert(newQuestionSession);
      if (questionSession === null) {
        throw new InternalError();
      }
      res.created({
        message: 'QuestionSession has been created',
        data: questionSession,
      });
    },
  );

  // Update questionSession by Id for authenticated user
  public updateQuestionSession = asyncHandler(
    async (
      req: ParsedRequest<
        IQuestionSessionUpdateSchema,
        void,
        IQuestionSessionIdSchema
      >,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const questionSession = needRecord(
        await questionSessionRepository.findById(req.valid.params.id),
        new NotFoundError('QuestionSession not found'),
      );

      const data = await questionSessionRepository.patchById(
        questionSession.id,
        updateBody,
      );

      res.ok({ message: 'QuestionSession has been updated', data });
    },
  );

  // Delete questionSession by Id for authenticated user
  public deleteQuestionSession = asyncHandler(
    async (
      req: ParsedRequest<void, void, IQuestionSessionIdSchema>,
      res: Response,
    ): Promise<void> => {
      const questionSession = needRecord(
        await questionSessionRepository.findById(req.valid.params.id),
        new NotFoundError('QuestionSession not found'),
      );

      await questionSessionRepository.deleteById(questionSession.id);
      res.noContent({ message: 'QuestionSession deleted successfully' });
    },
  );
}

export const questionSessionController = new QuestionSessionController();
