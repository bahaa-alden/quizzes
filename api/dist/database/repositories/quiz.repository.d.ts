import { QuizStatus } from './../../utils/enum';
import { UpdateQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IQuiz } from '../models/quiz.model';
export interface QuizFilterOptions {
    teacherId?: string;
    subjectId?: string;
    status?: QuizStatus;
    dateFrom?: Date;
    dateTo?: Date;
}
export interface QuizFindOptions extends FindOptions<QuizFilterOptions> {
    order: OrderOptions;
}
export declare class QuizRepository extends BaseRepository<IQuiz> {
    constructor();
    patchById(id: string, data: UpdateQuery<IQuiz>): Promise<IQuiz | null>;
    findById(id: string): Promise<IQuiz | null>;
    findForAdmin(options: QuizFindOptions): Promise<PaginatedList<IQuiz>>;
}
export declare const quizRepository: QuizRepository;
