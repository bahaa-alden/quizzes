import { QuizStatus } from './../../utils/enum';

import { model, Schema, type Document as MongooseDocument } from 'mongoose';
import { omit } from 'lodash';
import { IQuizQuestion } from './quiz-question.model';

export interface IQuiz extends MongooseDocument {
  id: string;
  // <creating-property-interface />
  duration: number;
  numberOfAttempts: number;
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
    duration: {
      type: Number,
    },
    numberOfAttempts: {
      type: Number,
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
      transform: (_, ret) => {
        if (ret.questionIds && Array.isArray(ret.questionIds)) {
          const questionIds = ret.questionIds.map((qq: IQuizQuestion) =>
            qq.questionId.toString(),
          );
          ret.questionIds = questionIds;
        }
        return omit(['deletedAt', '__v', '_id'], ret);
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

export default model<IQuiz>('Quiz', quizSchema);
