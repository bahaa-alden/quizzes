import { IUser } from './user.model';
import { ISubject } from './subject.model';
import mongoose from 'mongoose';
import { QuizStatus } from './../../utils/enum';
import { type Document as MongooseDocument } from 'mongoose';
import { IQuizQuestion } from './quiz-question.model';
export interface IQuiz extends MongooseDocument {
    id: string;
    teacherId?: IUser['_id'];
    teacher?: IUser;
    subjectId: ISubject['_id'];
    subject: ISubject;
    status?: QuizStatus;
    name: string;
    questionIds: IQuizQuestion[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: mongoose.Model<IQuiz, {}, {}, {}, mongoose.Document<unknown, {}, IQuiz> & IQuiz & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
