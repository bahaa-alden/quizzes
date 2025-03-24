import { type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import QuizQuestion, {
  type IQuizQuestion,
} from '../models/quiz-question.model';

export interface QuizQuestionFilterOptions {
  //filters
}

export interface QuizQuestionFindOptions
  extends FindOptions<QuizQuestionFilterOptions> {
  order: OrderOptions;
}

export class QuizQuestionRepository extends BaseRepository<IQuizQuestion> {
  constructor() {
    super(QuizQuestion);
  }

  async findForAdmin(
    options: QuizQuestionFindOptions,
  ): Promise<PaginatedList<IQuizQuestion>> {
    const { order, pagination, search } = options;

    const query: FilterQuery<IQuizQuestion> = { deletedAt: null };
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

export const quizQuestionRepository = new QuizQuestionRepository();
