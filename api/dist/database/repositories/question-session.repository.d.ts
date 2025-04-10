import { QuestionSessionStatus } from './../../utils/enum';
import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type IQuestionSession } from '../models/question-session.model';
export interface QuestionSessionFilterOptions {
    bookmarked?: boolean;
    status?: QuestionSessionStatus;
    sessionId?: string;
}
export interface QuestionSessionFindOptions extends FindOptions<QuestionSessionFilterOptions> {
    order: OrderOptions;
}
export declare class QuestionSessionRepository extends BaseRepository<IQuestionSession> {
    constructor();
    deleteSessionQuestions(sessionId: string): Promise<import("mongoose").UpdateWriteOpResult>;
    getQuestionIds(sessionId: string): Promise<any[]>;
    findForAdmin(options: QuestionSessionFindOptions): Promise<PaginatedList<IQuestionSession>>;
}
export declare const questionSessionRepository: QuestionSessionRepository;
