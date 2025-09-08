"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const common_2 = require("./common");
const zod_1 = require("zod");
const common_3 = require("./common");
const quizQuestionIdSchema = (0, zod_1.object)({
    id: common_1.objectId,
});
const quizQuestionAllSchema = (0, zod_1.object)({
    page: common_3.page,
    pageSize: common_3.pageSize,
    orderColumn: common_3.orderColumn,
    orderDirection: common_3.orderDirection,
    search: (0, zod_1.string)().optional(),
    quizId: common_1.objectId.optional(),
    fields: (0, zod_1.string)().optional(),
    dateFrom: common_2.stringToDate.optional(),
    dateTo: common_2.stringToDate.optional(),
});
const quizQuestionCreateSchema = (0, zod_1.object)({
    // <creating-property-create-schema />
    questionId: common_1.objectId,
    quizId: common_1.objectId,
}).strict();
const quizQuestionUpdateSchema = (0, zod_1.object)({
    // <creating-property-update-schema />
    questionId: common_1.objectId.optional(),
    quizId: common_1.objectId.optional(),
}).strict();
exports.default = {
    quizQuestionId: quizQuestionIdSchema,
    quizQuestionAll: quizQuestionAllSchema,
    quizQuestionCreate: quizQuestionCreateSchema,
    quizQuestionUpdate: quizQuestionUpdateSchema,
};
//# sourceMappingURL=quiz-question.schema.js.map