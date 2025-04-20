import { ISubject } from './subject.model';
import mongoose from 'mongoose';
import { type Document as MongooseDocument } from 'mongoose';
export interface IAnswer extends MongooseDocument {
    id: string;
    isCorrect?: boolean;
    text: string;
    sorting?: number;
}
export interface IQuestion extends MongooseDocument {
    id: string;
    subjectId: ISubject['_id'];
    subject: ISubject;
    answers?: IAnswer[];
    text: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: mongoose.Model<IQuestion, {}, {}, {}, mongoose.Document<unknown, {}, IQuestion> & IQuestion & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
