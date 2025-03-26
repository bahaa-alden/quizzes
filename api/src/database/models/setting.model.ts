import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';

export interface ISetting extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  numberOfAttempts: number;

  duration: number;

  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
}

const settingSchema: Schema = new Schema<ISetting>(
  {
    // <creating-property-schema />
    numberOfAttempts: {
      type: Number,
    },
    duration: {
      type: Number,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    collection: 'Setting',
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret) => omit(ret, ['deletedAt', '__v', '_id']),
    },
  },
);

export default model<ISetting>('Setting', settingSchema);
