import { type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Subject, { type ISubject } from '../models/subject.model';
import { selectedFields } from '../../utils/projection';

export interface SubjectFilterOptions {
  //filters
  teacherId?: string;
}

export interface SubjectFindOptions extends FindOptions<SubjectFilterOptions> {
  order: OrderOptions;
}

export class SubjectRepository extends BaseRepository<ISubject> {
  constructor() {
    super(Subject);
  }

  async findForAdmin(
    options: SubjectFindOptions,
  ): Promise<PaginatedList<ISubject>> {
    const { order, pagination, search, fields, filter } = options;

    const query: FilterQuery<ISubject> = { deletedAt: null };

    if (filter?.teacherId) {
      query.teacherId = filter.teacherId;
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

    if (fields) {
      queryResult.select(selectedFields(fields));
    }

    const results = await queryResult;
    return { results, total };
  }
}

export const subjectRepository = new SubjectRepository();
