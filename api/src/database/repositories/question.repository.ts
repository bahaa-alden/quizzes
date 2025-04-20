import { type UpdateQuery, type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Question, { type IQuestion } from '../models/question.model';
import { selectedFields } from '../../utils/projection';

export interface QuestionFilterOptions {
  //filters
  subjectId?: string;
}

export interface QuestionFindOptions
  extends FindOptions<QuestionFilterOptions> {
  order: OrderOptions;
}

export class QuestionRepository extends BaseRepository<IQuestion> {
  constructor() {
    super(Question);
  }

  async patchById(
    id: string,
    data: UpdateQuery<IQuestion>,
  ): Promise<IQuestion | null> {
    return await this.model
      .findByIdAndUpdate(id, data, { new: true })
      .populate(['subject']);
  }

  async findById(id: string): Promise<IQuestion | null> {
    return await this.model
      .findOne({ _id: id, deletedAt: null })
      .populate(['subject']);
  }

  async findForAdmin(
    options: QuestionFindOptions,
  ): Promise<PaginatedList<IQuestion>> {
    const { order, pagination, search, fields, filter } = options;

    const query: FilterQuery<IQuestion> = { deletedAt: null };

    if (filter?.subjectId) {
      query.subjectId = filter.subjectId;
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
      .skip((pagination.page - 1) * pagination.pageSize);
    console.log(fields);
    if (fields) {
      queryResult.select(selectedFields(fields));
    }
    const results = await queryResult;
    return { results, total };
  }
}

export const questionRepository = new QuestionRepository();
