import { objectId } from './common';
import { object, z, string, type TypeOf } from 'zod';
import { orderColumn, orderDirection, page, pageSize } from './common';

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
  subjectId: objectId.optional(),
  fields: string().optional(),
});

export type IQuestionAllSchema = TypeOf<typeof questionAllSchema>;

const questionCreateSchema = object({
  // <creating-property-create-schema />
  subjectId: objectId,
  answers: z.array(answersCreateSchema).optional(),
  text: z.string(),
});

export type IQuestionCreateSchema = TypeOf<typeof questionCreateSchema>;

const questionUpdateSchema = object({
  // <creating-property-update-schema />
  subjectId: objectId.optional(),
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
