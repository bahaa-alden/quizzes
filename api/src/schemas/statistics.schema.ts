import { objectId } from './common';

import { z, type TypeOf } from 'zod';
import { orderColumn, orderDirection, page, pageSize } from './common';

const statisticsIdSchema = z.object({
  id: objectId,
});

export type IStatisticsIdSchema = TypeOf<typeof statisticsIdSchema>;

const statisticsAllSchema = z.object({
  page,
  pageSize,
  orderColumn,
  orderDirection,
  search: z.string().optional(),
  userId: objectId.optional(),

  fields: z.string().optional(),
});

export type IStatisticsAllSchema = TypeOf<typeof statisticsAllSchema>;

const statisticsCreateSchema = z
  .object({
    // <creating-property-create-schema />
  })
  .strict();

export type IStatisticsCreateSchema = TypeOf<typeof statisticsCreateSchema>;

const statisticsUpdateSchema = z
  .object({
    // <creating-property-update-schema />
  })
  .strict();

export type IStatisticsUpdateSchema = TypeOf<typeof statisticsUpdateSchema>;

export default {
  statisticsId: statisticsIdSchema,
  statisticsAll: statisticsAllSchema,
  statisticsCreate: statisticsCreateSchema,
  statisticsUpdate: statisticsUpdateSchema,
};
