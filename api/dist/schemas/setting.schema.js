"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const common_1 = require("./common");
const settingIdSchema = zod_1.z.object({
    id: common_1.objectId,
});
const settingAllSchema = zod_1.z.object({
    page: common_1.page,
    pageSize: common_1.pageSize,
    orderColumn: common_1.orderColumn,
    orderDirection: common_1.orderDirection,
    search: zod_1.z.string().optional(),
    fields: zod_1.z.string().optional(),
});
const settingCreateSchema = zod_1.z
    .object({
    // <creating-property-create-schema />
    numberOfAttempts: zod_1.z.number(),
    duration: zod_1.z.number(),
})
    .strict();
const settingUpdateSchema = zod_1.z
    .object({
    // <creating-property-update-schema />
    numberOfAttempts: zod_1.z.number().optional(),
    duration: zod_1.z.number().optional(),
})
    .strict();
exports.default = {
    settingId: settingIdSchema,
    settingAll: settingAllSchema,
    settingCreate: settingCreateSchema,
    settingUpdate: settingUpdateSchema,
};
//# sourceMappingURL=setting.schema.js.map