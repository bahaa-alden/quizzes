import { SessionStatus } from './../../utils/enum';

import { endOfDay, startOfDay } from 'date-fns';

import { UpdateQuery, type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Session, { type ISession } from '../models/session.model';
import { selectedFields } from '../../utils/projection';

export interface SessionFilterOptions {
  //filters
  status?: SessionStatus;
  studentId?: string;
  quizId?: string;
  dateFrom?: Date;
  dateTo?: Date;
}

export interface SessionFindOptions extends FindOptions<SessionFilterOptions> {
  order: OrderOptions;
}

export class SessionRepository extends BaseRepository<ISession> {
  constructor() {
    super(Session);
  }

  async patchById(
    id: string,
    data: UpdateQuery<ISession>,
  ): Promise<ISession | null> {
    return await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .populate([
        'questionSessions',
        {
          path: 'quiz',
          populate: {
            path: 'questionIds',
          },
        },
        'student',
      ]);
  }

  async findByIdWithStudent(
    id: string,
    studentId: string,
  ): Promise<ISession | null> {
    return await this.model
      .findOne({ _id: id, studentId, deletedAt: null })
      .populate([
        'questionSessions',
        {
          path: 'quiz',
          populate: {
            path: 'questionIds',
          },
        },
        'student',
      ]);
  }

  async findById(id: string): Promise<ISession | null> {
    return await this.model.findOne({ _id: id, deletedAt: null }).populate([
      'questionSessions',
      {
        path: 'quiz',
        populate: {
          path: 'questionIds',
        },
      },
      'student',
    ]);
  }

  async findForAdmin(
    options: SessionFindOptions,
  ): Promise<PaginatedList<ISession>> {
    const { order, pagination, search, filter, fields } = options;

    const query: FilterQuery<ISession> = { deletedAt: null };
    if (filter?.status) {
      query.status = filter.status;
    }

    if (filter?.studentId) {
      query.studentId = filter.studentId;
    }

    if (filter?.quizId) {
      query.quizId = filter.quizId;
    }

    if (filter?.dateFrom ?? filter?.dateTo) {
      query.createdAt = {};
      if (filter.dateFrom) {
        query.createdAt.$gte = startOfDay(filter.dateFrom);
      }
      if (filter.dateTo) {
        query.createdAt.$lte = endOfDay(filter.dateTo);
      }
    }

    if (search) {
      query.$or = [];
    }

    const total = await this.model.where(query).countDocuments();
    const queryResult = this.model
      .find(query)
      .sort({
        [order.column]: order.direction === OrderDirection.asc ? 1 : -1,
      })
      .limit(pagination.pageSize)
      .skip((pagination.page - 1) * pagination.pageSize)
      .populate(['questionSessions', 'quiz', 'student']);
    if (fields) {
      queryResult.select(selectedFields(fields));
    }
    const results = await queryResult;

    return { results, total };
  }
}

export const sessionRepository = new SessionRepository();
