import { type FilterQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { OrderDirection, type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import Setting, { type ISetting } from '../models/setting.model';
import { selectedFields } from '../../utils/projection';

export interface SettingFilterOptions {
  //filters
}

export interface SettingFindOptions extends FindOptions<SettingFilterOptions> {
  order: OrderOptions;
}

export class SettingRepository extends BaseRepository<ISetting> {
  constructor() {
    super(Setting);
  }

  async findForAdmin(
    options: SettingFindOptions,
  ): Promise<PaginatedList<ISetting>> {
    const { order, pagination, search, fields } = options;

    const query: FilterQuery<ISetting> = { deletedAt: null };
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

export const settingRepository = new SettingRepository();
