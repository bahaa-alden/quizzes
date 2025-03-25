import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IQuestion } from '../models/question.model';
export interface QuestionFilterOptions {
}
export interface QuestionFindOptions extends FindOptions<QuestionFilterOptions> {
    order: OrderOptions;
}
export declare class QuestionRepository extends BaseRepository<IQuestion> {
    constructor();
    findForAdmin(options: QuestionFindOptions): Promise<PaginatedList<IQuestion>>;
}
export declare const questionRepository: QuestionRepository;
