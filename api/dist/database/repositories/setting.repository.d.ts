import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type ISetting } from '../models/setting.model';
export interface SettingFilterOptions {
}
export interface SettingFindOptions extends FindOptions<SettingFilterOptions> {
    order: OrderOptions;
}
export declare class SettingRepository extends BaseRepository<ISetting> {
    constructor();
    findForAdmin(options: SettingFindOptions): Promise<PaginatedList<ISetting>>;
}
export declare const settingRepository: SettingRepository;
