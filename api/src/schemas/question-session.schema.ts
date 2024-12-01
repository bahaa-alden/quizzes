import {
  objectId,
  booleanString,
  orderColumn,
  orderDirection,
  page,
  pageSize,
} from './common';
import { QuestionSessionStatus } from './../utils/enum';
import { object, z, string, type TypeOf } from 'zod';

const questionSessionIdSchema = object({
  id: objectId,
});

export type IQuestionSessionIdSchema = TypeOf<typeof questionSessionIdSchema>;

const questionSessionAllSchema = object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: string().optional(),
  bookmarked: booleanString.optional(),
  status: z.nativeEnum(QuestionSessionStatus).optional(),
  sessionId: objectId.optional(),
});

export type IQuestionSessionAllSchema = TypeOf<typeof questionSessionAllSchema>;

const questionSessionCreateSchema = object({
  // <creating-property-create-schema />
  sessionId: objectId,

  questionId: objectId,

  time: z.number().optional(),

  status: z.nativeEnum(QuestionSessionStatus).optional(),

  bookmarked: z.boolean().optional(),

  answer: z.number().optional(),
}).strict();

export type IQuestionSessionCreateSchema = TypeOf<
  typeof questionSessionCreateSchema
>;

const questionSessionUpdateSchema = object({
  // <creating-property-update-schema />
  sessionId: objectId.optional(),

  questionId: objectId.optional(),

  time: z.number().optional().optional(),

  status: z.nativeEnum(QuestionSessionStatus).optional(),

  bookmarked: z.boolean().optional().optional(),

  answer: z.number().optional().optional(),
}).strict();

export type IQuestionSessionUpdateSchema = TypeOf<
  typeof questionSessionUpdateSchema
>;

export default {
  questionSessionId: questionSessionIdSchema,
  questionSessionAll: questionSessionAllSchema,
  questionSessionCreate: questionSessionCreateSchema,
  questionSessionUpdate: questionSessionUpdateSchema,
};
