import { object, z, string, type TypeOf } from 'zod';
import {
  objectId,
  orderColumn,
  orderDirection,
  page,
  pageSize,
} from './common';

const answersCreateSchema = object({
  // <creating-property-create-schema-answers />

  isCorrect: z.boolean().optional(),

  text: z.string(),
});
export type IAnswersCreateSchema = TypeOf<typeof answersCreateSchema>;

const answersUpdateSchema = object({
  // <creating-property-update-schema-answers />

  isCorrect: z.boolean().optional(),

  text: z.string(),
});
export type IAnswersUpdateSchema = TypeOf<typeof answersUpdateSchema>;

const questionIdSchema = object({
  id: objectId,
});

export type IQuestionIdSchema = TypeOf<typeof questionIdSchema>;

const questionAllSchema = object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: string().optional(),
});

export type IQuestionAllSchema = TypeOf<typeof questionAllSchema>;

const questionCreateSchema = object({
  // <creating-property-create-schema />
  answers: z.array(answersCreateSchema).optional(),

  text: z.string(),
});

export type IQuestionCreateSchema = TypeOf<typeof questionCreateSchema>;

const questionUpdateSchema = object({
  // <creating-property-update-schema />
  answers: z.array(answersUpdateSchema).optional(),

  text: z.string().optional(),
}).strict();

export type IQuestionUpdateSchema = TypeOf<typeof questionUpdateSchema>;

export default {
  questionId: questionIdSchema,
  questionAll: questionAllSchema,
  questionCreate: questionCreateSchema,
  questionUpdate: questionUpdateSchema,
};
