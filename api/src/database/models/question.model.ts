import { ISubject } from './subject.model';
import mongoose from 'mongoose';
import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';

export interface IAnswer extends MongooseDocument {
  // <creating-property-interface-answers />
  id: string;
  isCorrect?: boolean;
  text: string;
  sorting?: number;
}

export interface IQuestion extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  subjectId: ISubject['_id'];
  subject: ISubject;
  answers?: IAnswer[];
  text: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const questionAnswerSchema: Schema = new Schema<IAnswer>(
  {
    // <creating-property-object-answers />
    isCorrect: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
    sorting: {
      type: Number,
    },
  },
  {
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['__v', '_id']),
    },
  },
);

const questionSchema: Schema = new Schema<IQuestion>(
  {
    // <creating-property-schema />
    subjectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
    },

    answers: {
      type: [questionAnswerSchema],
      default: [],
    },
    text: {
      type: String,
      index: 'text',
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'Question',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

questionSchema.virtual('subject', {
  localField: 'subjectId',
  foreignField: '_id',
  ref: 'Subject',
  justOne: true,
  match: { deletedAt: null },
});

export default model<IQuestion>('Question', questionSchema);
