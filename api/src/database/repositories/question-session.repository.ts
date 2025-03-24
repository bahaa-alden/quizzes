import { QuestionSessionStatus } from './../../utils/enum';

import { type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import QuestionSession, {
  type IQuestionSession,
} from '../models/question-session.model';

export interface QuestionSessionFilterOptions {
  //filters
  status?: QuestionSessionStatus;

  bookmarked?: boolean;

  sessionId?: string;
}

export interface QuestionSessionFindOptions
  extends FindOptions<QuestionSessionFilterOptions> {
  order: OrderOptions;
}

export class QuestionSessionRepository extends BaseRepository<IQuestionSession> {
  constructor() {
    super(QuestionSession);
  }

  async findForAdmin(
    options: QuestionSessionFindOptions,
  ): Promise<PaginatedList<IQuestionSession>> {
    const { order, pagination, search, filter } = options;

    const query: FilterQuery<IQuestionSession> = { deletedAt: null };
    if (filter?.status) {
      query.status = filter.status;
    }

    if (typeof filter?.bookmarked === 'boolean') {
      query.bookmarked = filter.bookmarked;
    }

    if (filter?.sessionId) {
      query.sessionId = filter.sessionId;
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
      .populate(['question']);

    return { results, total };
  }
}

export const questionSessionRepository = new QuestionSessionRepository();
