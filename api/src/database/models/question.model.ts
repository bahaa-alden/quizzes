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
      transform: (_, ret) => omit(['__v', '_id'], ret),
    },
  },
);

const questionSchema: Schema = new Schema<IQuestion>(
  {
    // <creating-property-schema />
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

export default model<IQuestion>('Question', questionSchema);
