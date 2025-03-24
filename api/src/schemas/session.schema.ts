import { stringToDate } from './common';

import { objectId } from './common';

import { SessionStatus } from './../utils/enum';

import { object, z, string, type TypeOf } from 'zod';
import { orderColumn, orderDirection, page, pageSize } from './common';

const sessionIdSchema = object({
  id: objectId,
});

export type ISessionIdSchema = TypeOf<typeof sessionIdSchema>;

const sessionAllSchema = object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: string().optional(),
  dateFrom: stringToDate.optional(),
  dateTo: stringToDate.optional(),

  quizId: objectId.optional(),

  status: z.nativeEnum(SessionStatus).optional(),

  studentId: objectId.optional(),
});

export type ISessionAllSchema = TypeOf<typeof sessionAllSchema>;

const sessionCreateSchema = object({
  // <creating-property-create-schema />
  quizId: objectId,

  studentId: objectId,

  status: z.nativeEnum(SessionStatus).optional(),
}).strict();

export type ISessionCreateSchema = TypeOf<typeof sessionCreateSchema>;

const sessionUpdateSchema = object({
  // <creating-property-update-schema />
  quizId: objectId.optional(),

  studentId: objectId.optional(),

  status: z.nativeEnum(SessionStatus).optional(),
}).strict();

export type ISessionUpdateSchema = TypeOf<typeof sessionUpdateSchema>;

export default {
  sessionId: sessionIdSchema,
  sessionAll: sessionAllSchema,
  sessionCreate: sessionCreateSchema,
  sessionUpdate: sessionUpdateSchema,
};
