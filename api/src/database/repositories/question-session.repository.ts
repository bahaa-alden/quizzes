import { QuestionSessionStatus } from './../../utils/enum';

import { type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import QuestionSession, {
  type IQuestionSession,
} from '../models/question-session.model';
import { selectedFields } from '../../utils/projection';

export interface QuestionSessionFilterOptions {
  //filters
  bookmarked?: boolean;
  status?: QuestionSessionStatus;
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
    const { order, pagination, search, filter, fields } = options;

    const query: FilterQuery<IQuestionSession> = { deletedAt: null };
    if (typeof filter?.bookmarked === 'boolean') {
      query.bookmarked = filter.bookmarked;
    }

    if (filter?.status) {
      query.status = filter.status;
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
      .select(selectedFields(fields))
      .limit(pagination.pageSize)
      .skip((pagination.page - 1) * pagination.pageSize)
      .populate(['question']);

    return { results, total };
  }
}

export const questionSessionRepository = new QuestionSessionRepository();
