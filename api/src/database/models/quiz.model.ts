import { IUser } from './user.model';

import { ISubject } from './subject.model';

import mongoose from 'mongoose';

import { QuizStatus } from './../../utils/enum';

import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';
import { IQuizQuestion } from './quiz-question.model';

export interface IQuiz extends MongooseDocument {
  id: string;
  // <creating-property-interface />
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

const quizSchema: Schema = new Schema<IQuiz>(
  {
    // <creating-property-schema />
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
    },
    status: {
      type: String,
      enum: Object.values(QuizStatus),
      default: QuizStatus.disactive,
    },
    name: {
      type: String,
      index: 'text',
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'Quiz',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret: IQuiz) => {
        if (ret.questionIds && Array.isArray(ret.questionIds)) {
          const questionIds = ret.questionIds.map((qq) =>
            qq.questionId.toString(),
          );
          ret.questionIds = questionIds;
        }
        return omit(ret, ['deletedAt', '__v', '_id']);
      },
    },
  },
);

quizSchema.virtual('questionIds', {
  ref: 'QuizQuestion',
  localField: '_id',
  foreignField: 'quizId',
  match: { deletedAt: null },
});

quizSchema.virtual('subject', {
  localField: 'subjectId',
  foreignField: '_id',
  ref: 'Subject',
  justOne: true,
  match: { deletedAt: null },
});

quizSchema.virtual('teacher', {
  localField: 'teacherId',
  foreignField: '_id',
  ref: 'User',
  justOne: true,
  match: { deletedAt: null },
});

export default model<IQuiz>('Quiz', quizSchema);
