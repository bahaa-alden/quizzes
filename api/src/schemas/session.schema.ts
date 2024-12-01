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
});

export type ISessionAllSchema = TypeOf<typeof sessionAllSchema>;

const sessionCreateSchema = z
  .object({
    // <creating-property-create-schema />
    quizId: objectId,
    studentId: objectId,
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
};
