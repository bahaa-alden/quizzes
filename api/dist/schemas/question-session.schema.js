"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const common_2 = require("./common");
const enum_1 = require("./../utils/enum");
const zod_1 = require("zod");
const questionSessionIdSchema = (0, zod_1.object)({
    id: common_1.objectId,
});
const questionSessionAllSchema = (0, zod_1.object)({
    page: common_2.page,
    pageSize: common_2.pageSize,
    orderColumn: common_2.orderColumn,
    orderDirection: common_2.orderDirection,
    search: (0, zod_1.string)().optional(),
    sessionId: common_1.objectId.optional(),
    bookmarked: common_2.booleanString.optional(),
    fields: (0, zod_1.string)().optional(),
    status: zod_1.z.nativeEnum(enum_1.QuestionSessionStatus).optional(),
});
const questionSessionCreateSchema = (0, zod_1.object)({
    // <creating-property-create-schema />
    sessionId: common_1.objectId,
    questionId: common_1.objectId,
    time: zod_1.z.number().optional(),
    status: zod_1.z.nativeEnum(enum_1.QuestionSessionStatus).optional(),
    bookmarked: zod_1.z.boolean().optional(),
    answer: zod_1.z.number().optional(),
}).strict();
const questionSessionUpdateSchema = (0, zod_1.object)({
    // <creating-property-update-schema />
    sessionId: common_1.objectId.optional(),
    questionId: common_1.objectId.optional(),
    time: zod_1.z.number().optional().optional(),
    status: zod_1.z.nativeEnum(enum_1.QuestionSessionStatus).optional(),
    bookmarked: zod_1.z.boolean().optional().optional(),
    answer: zod_1.z.number().optional().optional(),
}).strict();
exports.default = {
    questionSessionId: questionSessionIdSchema,
    questionSessionAll: questionSessionAllSchema,
    questionSessionCreate: questionSessionCreateSchema,
    questionSessionUpdate: questionSessionUpdateSchema,
};
//# sourceMappingURL=question-session.schema.js.map