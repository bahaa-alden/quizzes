import { Response, ParsedRequest } from 'express';
import { InternalError, NotFoundError } from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  SubjectFindOptions,
  subjectRepository,
} from '../database/repositories/subject.repository';
import {
  ISubjectAllSchema,
  ISubjectIdSchema,
  ISubjectCreateSchema,
  ISubjectUpdateSchema,
} from '../schemas/subject.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { RoleCode } from '../utils/enum';
import { needRecord } from '../utils/record';

export class SubjectController {
  // Get all Subjects by author
  public getSubjects = asyncHandler(
    async (
      req: ParsedRequest<void, ISubjectAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: SubjectFindOptions = {
        filter: {
          // filters
          teacherId: req.valid.query.teacherId,
        },
        search: req.valid.query.search,
        fields: req.valid.query.fields,
        order: defaultOrderParams(
          req.valid.query.orderColumn,
          req.valid.query.orderDirection,
        ),
        pagination: defaultPaginationParams(
          req.valid.query.page,
          req.valid.query.pageSize,
        ),
      };
      const subjects = await subjectRepository.findForAdmin(options);

      res.ok({ message: 'success', data: subjects });
    },
  );

  // Get subject by Id for authenticated user
  public getSubject = asyncHandler(
    async (
      req: ParsedRequest<void, void, ISubjectIdSchema>,
      res: Response,
    ): Promise<void> => {
      const subject = needRecord(
        await subjectRepository.findById(req.valid.params.id),
        new NotFoundError('Subject not found'),
      );

      res.ok({ message: 'success', data: subject });
    },
  );

  // Create subject handler
  public createSubject = asyncHandler(
    async (
      req: ParsedRequest<ISubjectCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const newSubject = req.valid.body;
      const subject = await subjectRepository.insert(newSubject);
      if (subject === null) {
        throw new InternalError();
      }
      res.created({ message: 'Subject has been created', data: subject });
    },
  );

  // Update subject by Id for authenticated user
  public updateSubject = asyncHandler(
    async (
      req: ParsedRequest<ISubjectUpdateSchema, void, ISubjectIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const subject = needRecord(
        await subjectRepository.findById(req.valid.params.id),
        new NotFoundError('Subject not found'),
      );

      const data = await subjectRepository.patchById(subject.id, updateBody);

      res.ok({ message: 'Subject has been updated', data });
    },
  );

  // Delete subject by Id for authenticated user
  public deleteSubject = asyncHandler(
    async (
      req: ParsedRequest<void, void, ISubjectIdSchema>,
      res: Response,
    ): Promise<void> => {
      const subject = needRecord(
        await subjectRepository.findById(req.valid.params.id),
        new NotFoundError('Subject not found'),
      );

      await subjectRepository.deleteById(subject.id);
      res.noContent({ message: 'Subject deleted successfully' });
    },
  );
}

export const subjectController = new SubjectController();
