"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const zod_1 = require("zod");
const common_2 = require("./common");
const subjectIdSchema = zod_1.z.object({
    id: common_1.objectId,
});
const subjectAllSchema = zod_1.z.object({
    page: common_2.page,
    pageSize: common_2.pageSize,
    orderColumn: common_2.orderColumn,
    orderDirection: common_2.orderDirection,
    search: zod_1.z.string().optional(),
    teacherId: common_1.objectId.optional(),
    fields: zod_1.z.string().optional(),
});
const subjectCreateSchema = zod_1.z
    .object({
    // <creating-property-create-schema />
    teacherId: common_1.objectId,
    isActive: zod_1.z.boolean().optional(),
    name: zod_1.z.string(),
})
    .strict();
const subjectUpdateSchema = zod_1.z
    .object({
    // <creating-property-update-schema />
    teacherId: common_1.objectId.optional(),
    isActive: zod_1.z.boolean().optional().optional(),
    name: zod_1.z.string().optional(),
})
    .strict();
exports.default = {
    subjectId: subjectIdSchema,
    subjectAll: subjectAllSchema,
    subjectCreate: subjectCreateSchema,
    subjectUpdate: subjectUpdateSchema,
};
//# sourceMappingURL=subject.schema.js.map