import { IUser } from './user.model';

import mongoose from 'mongoose';

import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';

export interface ISubject extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  teacherId: IUser['_id'];
  teacher: IUser;
  isActive?: boolean;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const subjectSchema: Schema = new Schema<ISubject>(
  {
    // <creating-property-schema />
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },

    isActive: {
      type: Boolean,
      default: true,
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
    collection: 'Subject',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

subjectSchema.virtual('teacher', {
  localField: 'teacherId',
  foreignField: '_id',
  ref: 'User',
  justOne: true,
  match: { deletedAt: null },
});

export default model<ISubject>('Subject', subjectSchema);
