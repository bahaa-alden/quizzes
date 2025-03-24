import { IQuiz } from './quiz.model';

import { IUser } from './user.model';

import mongoose from 'mongoose';

import { SessionStatus } from './../../utils/enum';

import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';
import { IQuestionSession } from './question-session.model';

export interface ISession extends MongooseDocument {
  id: string;
  // <creating-property-interface />
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

const sessionSchema: Schema = new Schema<ISession>(
  {
    // <creating-property-schema />
    quizId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Quiz',
    },

    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    status: {
      type: String,
      enum: Object.values(SessionStatus),
      default: SessionStatus.pending,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'Session',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

sessionSchema.virtual('student', {
  localField: 'studentId',
  foreignField: '_id',
  ref: 'User',
  justOne: true,
  match: { deletedAt: null },
});

sessionSchema.virtual('quiz', {
  localField: 'quizId',
  foreignField: '_id',
  ref: 'Quiz',
  justOne: true,
  match: { deletedAt: null },
});

sessionSchema.virtual('questionSessions', {
  localField: '_id',
  foreignField: 'sessionId',
  ref: 'QuestionSession',
});

export default model<ISession>('Session', sessionSchema);
