import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IQuizQuestion } from '../models/quiz-question.model';
export interface QuizQuestionFilterOptions {
    quizId?: string;
    dateFrom?: Date;
    dateTo?: Date;
}
export interface QuizQuestionFindOptions extends FindOptions<QuizQuestionFilterOptions> {
    order: OrderOptions;
}
export declare class QuizQuestionRepository extends BaseRepository<IQuizQuestion> {
    constructor();
    getQuestionIds(quizId: string): Promise<any[]>;
    findForAdmin(options: QuizQuestionFindOptions): Promise<PaginatedList<IQuizQuestion>>;
}
export declare const quizQuestionRepository: QuizQuestionRepository;
