import { IQuestion } from './question.model';
import { IQuiz } from './quiz.model';
import mongoose from 'mongoose';
import { type Document as MongooseDocument } from 'mongoose';
export interface IQuizQuestion extends MongooseDocument {
    id: string;
    questionId: IQuestion['_id'];
    question: IQuestion;
    quizId: IQuiz['_id'];
    quiz: IQuiz;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}
declare const _default: mongoose.Model<IQuizQuestion, {}, {}, {}, mongoose.Document<unknown, {}, IQuizQuestion> & IQuizQuestion & {
    _id: mongoose.Types.ObjectId;
}, any>;
export default _default;
