"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const zod_1 = require("zod");
const common_2 = require("./common");
const statisticsIdSchema = zod_1.z.object({
    id: common_1.objectId,
});
const statisticsAllSchema = zod_1.z.object({
    page: common_2.page,
    pageSize: common_2.pageSize,
    orderColumn: common_2.orderColumn,
    orderDirection: common_2.orderDirection,
    search: zod_1.z.string().optional(),
    userId: common_1.objectId.optional(),
    fields: zod_1.z.string().optional(),
});
const statisticsCreateSchema = zod_1.z
    .object({
// <creating-property-create-schema />
})
    .strict();
const statisticsUpdateSchema = zod_1.z
    .object({
// <creating-property-update-schema />
})
    .strict();
exports.default = {
    statisticsId: statisticsIdSchema,
    statisticsAll: statisticsAllSchema,
    statisticsCreate: statisticsCreateSchema,
    statisticsUpdate: statisticsUpdateSchema,
};
//# sourceMappingURL=statistics.schema.js.map