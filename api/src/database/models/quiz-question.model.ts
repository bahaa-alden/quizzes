import { IQuestion } from './question.model';

import { IQuiz } from './quiz.model';

import mongoose from 'mongoose';

import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';

export interface IQuizQuestion extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  questionId: IQuestion['_id'];
  question: IQuestion;

  quizId: IQuiz['_id'];
  quiz: IQuiz;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const quizQuestionSchema: Schema = new Schema<IQuizQuestion>(
  {
    // <creating-property-schema />
    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },

    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
    },

    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'QuizQuestion',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

quizQuestionSchema.virtual('quiz', {
  localField: 'quizId',
  foreignField: '_id',
  ref: 'Quiz',
  justOne: true,
  match: { deletedAt: null },
});

quizQuestionSchema.virtual('question', {
  localField: 'questionId',
  foreignField: '_id',
  ref: 'Question',
  justOne: true,
  match: { deletedAt: null },
});

export default model<IQuizQuestion>('QuizQuestion', quizQuestionSchema);
