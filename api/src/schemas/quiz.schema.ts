import { stringToDate } from './common';

import { QuizStatus } from './../utils/enum';

import { object, z, string, type TypeOf } from 'zod';
import {
  objectId,
  orderColumn,
  orderDirection,
  page,
  pageSize,
} from './common';
import questionSchema from './question.schema';

const quizIdSchema = object({
  id: objectId,
});

export type IQuizIdSchema = TypeOf<typeof quizIdSchema>;

const quizAllSchema = object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: string().optional(),
  status: z.nativeEnum(QuizStatus).optional(),
  fields: string().optional(),
  dateFrom: stringToDate.optional(),
  dateTo: stringToDate.optional(),
});

export type IQuizAllSchema = TypeOf<typeof quizAllSchema>;

const quizCreateSchema = object({
  // <creating-property-create-schema />
  status: z.nativeEnum(QuizStatus).optional(),

  name: z.string(),
}).strict();

export type IQuizCreateSchema = TypeOf<typeof quizCreateSchema>;

const quizUpdateSchema = object({
  // <creating-property-update-schema />
  status: z.nativeEnum(QuizStatus).optional(),

  name: z.string().optional(),
}).strict();

export type IQuizUpdateSchema = TypeOf<typeof quizUpdateSchema>;

const addQuestionsSchema = z.object({
  questions: questionSchema.questionCreate.array().optional(),
  questionIds: objectId.array().optional(),
});

export type IAddQuestionsSchema = TypeOf<typeof addQuestionsSchema>;

export default {
  addQuestions: addQuestionsSchema,
  quizId: quizIdSchema,
  quizAll: quizAllSchema,
  quizCreate: quizCreateSchema,
  quizUpdate: quizUpdateSchema,
};
