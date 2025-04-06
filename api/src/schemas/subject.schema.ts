import { objectId } from './common';

import { z, type TypeOf } from 'zod';
import { orderColumn, orderDirection, page, pageSize } from './common';

const subjectIdSchema = z.object({
  id: objectId,
});

export type ISubjectIdSchema = TypeOf<typeof subjectIdSchema>;

const subjectAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  teacherId: objectId.optional(),

  fields: z.string().optional(),
});

export type ISubjectAllSchema = TypeOf<typeof subjectAllSchema>;

const subjectCreateSchema = z
  .object({
    // <creating-property-create-schema />
    teacherId: objectId,

    isActive: z.boolean().optional(),

    name: z.string(),
  })
  .strict();

export type ISubjectCreateSchema = TypeOf<typeof subjectCreateSchema>;

const subjectUpdateSchema = z
  .object({
    // <creating-property-update-schema />
    teacherId: objectId.optional(),

    isActive: z.boolean().optional().optional(),

    name: z.string().optional(),
  })
  .strict();

export type ISubjectUpdateSchema = TypeOf<typeof subjectUpdateSchema>;

export default {
  subjectId: subjectIdSchema,
  subjectAll: subjectAllSchema,
  subjectCreate: subjectCreateSchema,
  subjectUpdate: subjectUpdateSchema,
};
