import { QuizStatus } from './../../utils/enum';

import { endOfDay, startOfDay } from 'date-fns';

import { UpdateQuery, type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Quiz, { type IQuiz } from '../models/quiz.model';
import { selectedFields } from '../../utils/projection';

export interface QuizFilterOptions {
  //filters
  teacherId?: string;

  subjectId?: string;

  status?: QuizStatus;
  dateFrom?: Date;
  dateTo?: Date;
}

export interface QuizFindOptions extends FindOptions<QuizFilterOptions> {
  order: OrderOptions;
}

export class QuizRepository extends BaseRepository<IQuiz> {
  constructor() {
    super(Quiz);
  }

  async patchById(id: string, data: UpdateQuery<IQuiz>): Promise<IQuiz | null> {
    return await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .populate(['questionIds', 'teacher', 'subject']);
  }

  async findById(id: string): Promise<IQuiz | null> {
    return await this.model
      .findOne({ _id: id, deletedAt: null })
      .populate(['questionIds', 'teacher', 'subject']);
  }

  async findForAdmin(options: QuizFindOptions): Promise<PaginatedList<IQuiz>> {
    const { order, pagination, search, filter, fields } = options;

    const query: FilterQuery<IQuiz> = { deletedAt: null };
    if (filter?.teacherId) {
      query.teacherId = filter.teacherId;
    }

    if (filter?.subjectId) {
      query.subjectId = filter.subjectId;
    }

    if (filter?.status) {
      query.status = filter.status;
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
      .populate(['questionIds']);
    if (fields) {
      queryResult.select(selectedFields(fields));
    }
    const results = await queryResult;
    return { results, total };
  }
}

export const quizRepository = new QuizRepository();
