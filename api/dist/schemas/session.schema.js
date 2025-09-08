"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const common_2 = require("./common");
const enum_1 = require("./../utils/enum");
const zod_1 = require("zod");
const common_3 = require("./common");
const sessionIdSchema = zod_1.z.object({
    id: common_2.objectId,
});
const sessionAllSchema = zod_1.z.object({
    page: common_3.page,
    pageSize: common_3.pageSize,
    orderColumn: common_3.orderColumn,
    orderDirection: common_3.orderDirection,
    search: zod_1.z.string().optional(),
    status: zod_1.z.nativeEnum(enum_1.SessionStatus).optional(),
    studentId: common_2.objectId.optional(),
    quizId: common_2.objectId.optional(),
    dateFrom: common_1.stringToDate.optional(),
    dateTo: common_1.stringToDate.optional(),
    fields: zod_1.z.string().optional(),
});
const sessionRecordSchema = zod_1.z.object({
    dateFrom: common_1.stringToDate.optional(),
    dateTo: common_1.stringToDate.optional(),
});
const sessionCreateSchema = zod_1.z
    .object({
    // <creating-property-create-schema />
    score: zod_1.z.number().optional(),
    quizId: common_2.objectId,
    studentId: common_2.objectId.optional(),
    status: zod_1.z.nativeEnum(enum_1.SessionStatus).optional(),
})
    .strict();
const sessionUpdateSchema = zod_1.z
    .object({
    // <creating-property-update-schema />
    score: zod_1.z.number().optional().optional(),
    quizId: common_2.objectId.optional(),
    studentId: common_2.objectId.optional(),
    status: zod_1.z.nativeEnum(enum_1.SessionStatus).optional(),
})
    .strict();
exports.default = {
    sessionId: sessionIdSchema,
    sessionAll: sessionAllSchema,
    sessionCreate: sessionCreateSchema,
    sessionUpdate: sessionUpdateSchema,
    sessionRecord: sessionRecordSchema,
};
//# sourceMappingURL=session.schema.js.map