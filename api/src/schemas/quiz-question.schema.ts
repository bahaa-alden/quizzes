import { object, z, string, type TypeOf } from 'zod';
import {
  objectId,
  orderColumn,
  orderDirection,
  page,
  pageSize,
} from './common';

const quizQuestionIdSchema = object({
  id: objectId,
});

export type IQuizQuestionIdSchema = TypeOf<typeof quizQuestionIdSchema>;

const quizQuestionAllSchema = object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: string().optional(),
});

export type IQuizQuestionAllSchema = TypeOf<typeof quizQuestionAllSchema>;

const quizQuestionCreateSchema = object({
  // <creating-property-create-schema />
  questionId: objectId,

  quizId: objectId,
}).strict();

export type IQuizQuestionCreateSchema = TypeOf<typeof quizQuestionCreateSchema>;

const quizQuestionUpdateSchema = object({
  // <creating-property-update-schema />
  questionId: objectId.optional(),

  quizId: objectId.optional(),
}).strict();

export type IQuizQuestionUpdateSchema = TypeOf<typeof quizQuestionUpdateSchema>;

export default {
  quizQuestionId: quizQuestionIdSchema,
  quizQuestionAll: quizQuestionAllSchema,
  quizQuestionCreate: quizQuestionCreateSchema,
  quizQuestionUpdate: quizQuestionUpdateSchema,
};
