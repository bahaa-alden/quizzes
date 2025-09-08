import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type ISubject } from '../models/subject.model';
export interface SubjectFilterOptions {
    teacherId?: string;
}
export interface SubjectFindOptions extends FindOptions<SubjectFilterOptions> {
    order: OrderOptions;
}
export declare class SubjectRepository extends BaseRepository<ISubject> {
    constructor();
    findById(id: string): Promise<ISubject | null>;
    findForAdmin(options: SubjectFindOptions): Promise<PaginatedList<ISubject>>;
}
export declare const subjectRepository: SubjectRepository;
