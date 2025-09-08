import { IUser } from './user.model';
import mongoose from 'mongoose';
import { type Document as MongooseDocument } from 'mongoose';
export interface ISubject extends MongooseDocument {
    id: string;
    teacherId: IUser['_id'];
    teacher: IUser;
    isActive?: boolean;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: mongoose.Model<ISubject, {}, {}, {}, mongoose.Document<unknown, {}, ISubject> & ISubject & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
