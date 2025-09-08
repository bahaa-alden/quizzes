"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const common_2 = require("./common");
const enum_1 = require("./../utils/enum");
const zod_1 = require("zod");
const common_3 = require("./common");
const question_schema_1 = require("./question.schema");
const quizIdSchema = (0, zod_1.object)({
    id: common_1.objectId,
});
const quizAllSchema = (0, zod_1.object)({
    page: common_3.page,
    pageSize: common_3.pageSize,
    orderColumn: common_3.orderColumn,
    orderDirection: common_3.orderDirection,
    search: (0, zod_1.string)().optional(),
    teacherId: common_1.objectId.optional(),
    subjectId: common_1.objectId.optional(),
    status: zod_1.z.nativeEnum(enum_1.QuizStatus).optional(),
    fields: (0, zod_1.string)().optional(),
    dateFrom: common_2.stringToDate.optional(),
    dateTo: common_2.stringToDate.optional(),
});
const quizCreateSchema = (0, zod_1.object)({
    // <creating-property-create-schema />
    subjectId: common_1.objectId,
    status: zod_1.z.nativeEnum(enum_1.QuizStatus).optional(),
    name: zod_1.z.string(),
}).strict();
const quizUpdateSchema = (0, zod_1.object)({
    // <creating-property-update-schema />
    subjectId: common_1.objectId.optional(),
    status: zod_1.z.nativeEnum(enum_1.QuizStatus).optional(),
    name: zod_1.z.string().optional(),
}).strict();
const addQuestionsSchema = zod_1.z.object({
    questions: question_schema_1.default.questionCreate.array().optional(),
    questionIds: common_1.objectId.array().optional(),
});
exports.default = {
    addQuestions: addQuestionsSchema,
    quizId: quizIdSchema,
    quizAll: quizAllSchema,
    quizCreate: quizCreateSchema,
    quizUpdate: quizUpdateSchema,
};
//# sourceMappingURL=quiz.schema.js.map