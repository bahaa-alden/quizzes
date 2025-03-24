import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  SessionFindOptions,
  sessionRepository,
} from '../database/repositories/session.repository';
import {
  ISessionAllSchema,
  ISessionIdSchema,
  ISessionCreateSchema,
  ISessionUpdateSchema,
} from '../schemas/session.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { RoleCode } from '../utils/enum';
import { needRecord } from '../utils/record';

export class SessionController {
  // Get all Sessions by author
  public getSessions = asyncHandler(
    async (
      req: ParsedRequest<void, ISessionAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: SessionFindOptions = {
        filter: {
          // filters
          dateFrom: req.valid.query.dateFrom,
          dateTo: req.valid.query.dateTo,

          quizId: req.valid.query.quizId,

          status: req.valid.query.status,

          studentId: req.valid.query.studentId,
        },
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
      const sessions = await sessionRepository.findForAdmin(options);

      res.ok({ message: 'success', data: sessions });
    },
  );

  // Get session by Id for authenticated user
  public getSession = asyncHandler(
    async (
      req: ParsedRequest<void, void, ISessionIdSchema>,
      res: Response,
    ): Promise<void> => {
      const session = needRecord(
        await sessionRepository.findById(req.valid.params.id),
        new NotFoundError('Session not found'),
      );

      res.ok({ message: 'success', data: session });
    },
  );

  // Create session handler
  public createSession = asyncHandler(
    async (
      req: ParsedRequest<ISessionCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newSession = req.valid.body;
      const session = await sessionRepository.insert(newSession);
      if (session === null) {
        throw new InternalError();
      }
      res.created({ message: 'Session has been created', data: session });
    },
  );

  // Update session by Id for authenticated user
  public updateSession = asyncHandler(
    async (
      req: ParsedRequest<ISessionUpdateSchema, void, ISessionIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const session = needRecord(
        await sessionRepository.findById(req.valid.params.id),
        new NotFoundError('Session not found'),
      );

      const data = await sessionRepository.patchById(session.id, updateBody);

      res.ok({ message: 'Session has been updated', data });
    },
  );

  // Delete session by Id for authenticated user
  public deleteSession = asyncHandler(
    async (
      req: ParsedRequest<void, void, ISessionIdSchema>,
      res: Response,
    ): Promise<void> => {
      const session = needRecord(
        await sessionRepository.findById(req.valid.params.id),
        new NotFoundError('Session not found'),
      );

      await sessionRepository.deleteById(session.id);
      res.noContent({ message: 'Session deleted successfully' });
    },
  );
}

export const sessionController = new SessionController();
