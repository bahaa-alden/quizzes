import { SessionStatus } from './../../utils/enum';
import { UpdateQuery } from 'mongoose';
import { type PaginatedList } from '../../utils/pagination';
import { type OrderOptions } from '../../utils/order';
import { BaseRepository, type FindOptions } from './base.repository';
import { type ISession } from '../models/session.model';
export interface SessionFilterOptions {
    status?: SessionStatus;
    studentId?: string;
    quizId?: string;
    dateFrom?: Date;
    dateTo?: Date;
}
export interface SessionFindOptions extends FindOptions<SessionFilterOptions> {
    order: OrderOptions;
}
export declare class SessionRepository extends BaseRepository<ISession> {
    constructor();
    patchById(id: string, data: UpdateQuery<ISession>): Promise<ISession | null>;
    findByIdWithStudent(id: string, studentId: string): Promise<ISession | null>;
    findById(id: string): Promise<ISession | null>;
    findForAdmin(options: SessionFindOptions): Promise<PaginatedList<ISession>>;
}
export declare const sessionRepository: SessionRepository;
