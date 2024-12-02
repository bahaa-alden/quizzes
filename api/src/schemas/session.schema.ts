import { stringToDate } from './common';

import { objectId } from './common';

import { SessionStatus } from './../utils/enum';

import { z, type TypeOf } from 'zod';
import { orderColumn, orderDirection, page, pageSize } from './common';

const sessionIdSchema = z.object({
  id: objectId,
});

export type ISessionIdSchema = TypeOf<typeof sessionIdSchema>;

const sessionAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  status: z.nativeEnum(SessionStatus).optional(),
  studentId: objectId.optional(),
  quizId: objectId.optional(),
  dateFrom: stringToDate.optional(),
  dateTo: stringToDate.optional(),
  fields: z.string().optional(),
});

export type ISessionAllSchema = TypeOf<typeof sessionAllSchema>;

const sessionRecordSchema = z.object({
  dateFrom: stringToDate.optional(),
  dateTo: stringToDate.optional(),
});

export type ISessionRecordSchema = TypeOf<typeof sessionRecordSchema>;

const sessionCreateSchema = z
  .object({
    // <creating-property-create-schema />
    quizId: objectId,
    studentId: objectId.optional(),
    status: z.nativeEnum(SessionStatus).optional(),
  })
  .strict();

export type ISessionCreateSchema = TypeOf<typeof sessionCreateSchema>;

const sessionUpdateSchema = z
  .object({
    // <creating-property-update-schema />
    quizId: objectId.optional(),
    studentId: objectId.optional(),
    status: z.nativeEnum(SessionStatus).optional(),
  })
  .strict();

export type ISessionUpdateSchema = TypeOf<typeof sessionUpdateSchema>;

export default {
  sessionId: sessionIdSchema,
  sessionAll: sessionAllSchema,
  sessionCreate: sessionCreateSchema,
  sessionUpdate: sessionUpdateSchema,
  sessionRecord: sessionRecordSchema,
};
