"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const zod_1 = require("zod");
const common_2 = require("./common");
const answersCreateSchema = (0, zod_1.object)({
    // <creating-property-create-schema-answers />
    isCorrect: zod_1.z.boolean().optional(),
    text: zod_1.z.string(),
});
const answersUpdateSchema = (0, zod_1.object)({
    // <creating-property-update-schema-answers />
    isCorrect: zod_1.z.boolean().optional(),
    text: zod_1.z.string(),
});
const questionIdSchema = (0, zod_1.object)({
    id: common_1.objectId,
});
const questionAllSchema = (0, zod_1.object)({
    page: common_2.page,
    pageSize: common_2.pageSize,
    orderColumn: common_2.orderColumn,
    orderDirection: common_2.orderDirection,
    search: (0, zod_1.string)().optional(),
    subjectId: common_1.objectId.optional(),
    fields: (0, zod_1.string)().optional(),
});
const questionCreateSchema = (0, zod_1.object)({
    // <creating-property-create-schema />
    subjectId: common_1.objectId,
    answers: zod_1.z.array(answersCreateSchema).optional(),
    text: zod_1.z.string(),
});
const questionUpdateSchema = (0, zod_1.object)({
    // <creating-property-update-schema />
    subjectId: common_1.objectId.optional(),
    answers: zod_1.z.array(answersUpdateSchema).optional(),
    text: zod_1.z.string().optional(),
}).strict();
exports.default = {
    questionId: questionIdSchema,
    questionAll: questionAllSchema,
    questionCreate: questionCreateSchema,
    questionUpdate: questionUpdateSchema,
};
//# sourceMappingURL=question.schema.js.map