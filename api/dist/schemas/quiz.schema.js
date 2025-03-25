"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
const enum_1 = require("./../utils/enum");
const zod_1 = require("zod");
const common_2 = require("./common");
const question_schema_1 = require("./question.schema");
const quizIdSchema = (0, zod_1.object)({
    id: common_2.objectId,
});
const quizAllSchema = (0, zod_1.object)({
    page: common_2.page,
    pageSize: common_2.pageSize,
    orderColumn: common_2.orderColumn,
    orderDirection: common_2.orderDirection,
    search: (0, zod_1.string)().optional(),
    status: zod_1.z.nativeEnum(enum_1.QuizStatus).optional(),
    fields: (0, zod_1.string)().optional(),
    dateFrom: common_1.stringToDate.optional(),
    dateTo: common_1.stringToDate.optional(),
});
const quizCreateSchema = (0, zod_1.object)({
    // <creating-property-create-schema />
    duration: zod_1.z.number(),
    numberOfAttempts: zod_1.z.number(),
    status: zod_1.z.nativeEnum(enum_1.QuizStatus).optional(),
    name: zod_1.z.string(),
}).strict();
const quizUpdateSchema = (0, zod_1.object)({
    // <creating-property-update-schema />
    duration: zod_1.z.number().optional(),
    numberOfAttempts: zod_1.z.number().optional(),
    status: zod_1.z.nativeEnum(enum_1.QuizStatus).optional(),
    name: zod_1.z.string().optional(),
}).strict();
const addQuestionsSchema = zod_1.z.object({
    questions: question_schema_1.default.questionCreate.array().optional(),
    questionIds: common_2.objectId.array().optional(),
});
exports.default = {
    addQuestions: addQuestionsSchema,
    quizId: quizIdSchema,
    quizAll: quizAllSchema,
    quizCreate: quizCreateSchema,
    quizUpdate: quizUpdateSchema,
};
//# sourceMappingURL=quiz.schema.js.map