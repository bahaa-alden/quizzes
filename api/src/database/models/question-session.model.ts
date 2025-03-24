import { ISession } from './session.model';

import { IQuestion } from './question.model';

import mongoose from 'mongoose';

import { QuestionSessionStatus } from './../../utils/enum';

import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';

export interface IQuestionSession extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  sessionId: ISession['_id'];
  session: ISession;
  questionId: IQuestion['_id'];
  question: IQuestion;
  time?: number;
  status?: QuestionSessionStatus;
  bookmarked?: boolean;
  answer?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const questionSessionSchema: Schema = new Schema<IQuestionSession>(
  {
    // <creating-property-schema />
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Session',
    },

    questionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
    },

    time: {
      type: Number,
    },
    status: {
      type: String,
      enum: Object.values(QuestionSessionStatus),
      default: QuestionSessionStatus.started,
    },

    bookmarked: {
      type: Boolean,
      default: false,
    },
    answer: {
      type: Number,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'QuestionSession',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

questionSessionSchema.virtual('question', {
  localField: 'questionId',
  foreignField: '_id',
  ref: 'Question',
  justOne: true,
  match: { deletedAt: null },
});

questionSessionSchema.virtual('session', {
  localField: 'sessionId',
  foreignField: '_id',
  ref: 'Session',
  justOne: true,
  match: { deletedAt: null },
});

export default model<IQuestionSession>(
  'QuestionSession',
  questionSessionSchema,
);
