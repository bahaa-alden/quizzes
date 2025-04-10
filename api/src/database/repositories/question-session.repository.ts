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

  async deleteSessionQuestions(sessionId: string) {
    return await this.model.updateMany(
      { sessionId, deletedAt: null },
      { $set: { deletedAt: new Date() } },
    );
  }

  async getQuestionIds(sessionId: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return await this.model
      .find({ sessionId, deletedAt: null })
      .distinct('questionId');
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
    const queryResult = this.model
      .find(query)
      .sort({
        [order.column]: order.direction === OrderDirection.asc ? 1 : -1,
      })
      .limit(pagination.pageSize)
      .skip((pagination.page - 1) * pagination.pageSize)
      .populate(['question']);
    if (fields) {
      queryResult.select(selectedFields(fields));
    }
    const results = await queryResult;

    return { results, total };
  }
}

export const questionSessionRepository = new QuestionSessionRepository();
