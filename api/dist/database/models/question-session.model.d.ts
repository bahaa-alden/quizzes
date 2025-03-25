import { ISession } from './session.model';
import { IQuestion } from './question.model';
import mongoose from 'mongoose';
import { QuestionSessionStatus } from './../../utils/enum';
import { type Document as MongooseDocument } from 'mongoose';
export interface IQuestionSession extends MongooseDocument {
    id: string;
    sessionId: ISession['_id'];
    session: ISession;
    questionId: IQuestion['_id'];
    question: IQuestion;
    time?: number;
    status?: QuestionSessionStatus;
    bookmarked?: boolean;
    answer?: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: mongoose.Model<IQuestionSession, {}, {}, {}, mongoose.Document<unknown, {}, IQuestionSession> & IQuestionSession & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
