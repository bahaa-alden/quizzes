import { QuizStatus } from './../../utils/enum';
import { type Document as MongooseDocument } from 'mongoose';
import { IQuizQuestion } from './quiz-question.model';
export interface IQuiz extends MongooseDocument {
    id: string;
    duration: number;
    numberOfAttempts: number;
    status?: QuizStatus;
    name: string;
    questionIds: IQuizQuestion[];
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: import("mongoose").Model<IQuiz, {}, {}, {}, MongooseDocument<unknown, {}, IQuiz> & IQuiz & {
    _id: import("mongoose").Types.ObjectId;
}, any>;
export default _default;
