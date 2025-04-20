import { type UpdateQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IQuestion } from '../models/question.model';
export interface QuestionFilterOptions {
    subjectId?: string;
}
export interface QuestionFindOptions extends FindOptions<QuestionFilterOptions> {
    order: OrderOptions;
}
export declare class QuestionRepository extends BaseRepository<IQuestion> {
    constructor();
    patchById(id: string, data: UpdateQuery<IQuestion>): Promise<IQuestion | null>;
    findById(id: string): Promise<IQuestion | null>;
    findForAdmin(options: QuestionFindOptions): Promise<PaginatedList<IQuestion>>;
}
export declare const questionRepository: QuestionRepository;
