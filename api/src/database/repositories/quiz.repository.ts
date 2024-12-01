import { QuizStatus } from './../../utils/enum';

import { endOfDay, startOfDay } from 'date-fns';

import { UpdateQuery, type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Quiz, { type IQuiz } from '../models/quiz.model';

export interface QuizFilterOptions {
  //filters
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
      .populate(['questionIds']);
  }

  async findById(id: string): Promise<IQuiz | null> {
    return await this.model
      .findOne({ _id: id, deletedAt: null })
      .populate(['questionIds']);
  }

  async findForAdmin(options: QuizFindOptions): Promise<PaginatedList<IQuiz>> {
    const { order, pagination, search, filter } = options;

    const query: FilterQuery<IQuiz> = { deletedAt: null };
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
    const results = await this.model
      .find(query)
      .sort({
        [order.column]: order.direction === OrderDirection.asc ? 1 : -1,
      })
      .limit(pagination.pageSize)
      .skip((pagination.page - 1) * pagination.pageSize)
      .populate(['questionIds']);

    return { results, total };
  }
}

export const quizRepository = new QuizRepository();
