import { IQuiz } from './quiz.model';
import { IUser } from './user.model';
import mongoose from 'mongoose';
import { SessionStatus } from './../../utils/enum';
import { type Document as MongooseDocument } from 'mongoose';
import { IQuestionSession } from './question-session.model';
export interface ISession extends MongooseDocument {
    id: string;
    score?: number;
    quizId: IQuiz['_id'];
    quiz: IQuiz;
    studentId: IUser['_id'];
    student: IUser;
    status?: SessionStatus;
    questionSessions: IQuestionSession[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: mongoose.Model<ISession, {}, {}, {}, mongoose.Document<unknown, {}, ISession> & ISession & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
