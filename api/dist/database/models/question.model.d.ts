import { type Document as MongooseDocument } from 'mongoose';
export interface IAnswer extends MongooseDocument {
    id: string;
    isCorrect?: boolean;
    text: string;
    sorting?: number;
}
export interface IQuestion extends MongooseDocument {
    id: string;
    answers?: IAnswer[];
    text: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: import("mongoose").Model<IQuestion, {}, {}, {}, MongooseDocument<unknown, {}, IQuestion> & IQuestion & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default _default;
