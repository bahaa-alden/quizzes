import { type Document as MongooseDocument } from 'mongoose';
export interface ISetting extends MongooseDocument {
    id: string;
    numberOfAttempts: number;
    duration: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: import("mongoose").Model<ISetting, {}, {}, {}, MongooseDocument<unknown, {}, ISetting> & ISetting & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default _default;
