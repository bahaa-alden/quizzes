import { z, type TypeOf } from 'zod';
import {
  objectId,
  orderColumn,
  orderDirection,
  page,
  pageSize,
} from './common';

const settingIdSchema = z.object({
  id: objectId,
});

export type ISettingIdSchema = TypeOf<typeof settingIdSchema>;

const settingAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  fields: z.string().optional(),
});

export type ISettingAllSchema = TypeOf<typeof settingAllSchema>;

const settingCreateSchema = z
  .object({
    // <creating-property-create-schema />
    numberOfAttempts: z.number(),

    duration: z.number(),
  })
  .strict();

export type ISettingCreateSchema = TypeOf<typeof settingCreateSchema>;

const settingUpdateSchema = z
  .object({
    // <creating-property-update-schema />
    numberOfAttempts: z.number().optional(),

    duration: z.number().optional(),
  })
  .strict();

export type ISettingUpdateSchema = TypeOf<typeof settingUpdateSchema>;

export default {
  settingId: settingIdSchema,
  settingAll: settingAllSchema,
  settingCreate: settingCreateSchema,
  settingUpdate: settingUpdateSchema,
};
