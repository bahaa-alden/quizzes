"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRoutes = exports.QuestionRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const question_schema_1 = require("../schemas/question.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const question_controller_1 = require("../controllers/question.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN, TEACHER } = enum_1.RoleCode;
class QuestionRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL QUESTIONS
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: question_schema_1.default.questionAll }), question_controller_1.questionController.getQuestions);
        // GET QUESTION BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: question_schema_1.default.questionId }), question_controller_1.questionController.getQuestion);
        // CREATE QUESTION
        this.router.post('/', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: question_schema_1.default.questionCreate }), question_controller_1.questionController.createQuestion);
        // UPDATE QUESTION BY ID
        this.router.patch('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: question_schema_1.default.questionId,
            body: question_schema_1.default.questionUpdate,
        }), question_controller_1.questionController.updateQuestion);
        // DELETE QUESTION BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: question_schema_1.default.questionId }), question_controller_1.questionController.deleteQuestion);
    }
}
exports.QuestionRoutes = QuestionRoutes;
exports.questionRoutes = new QuestionRoutes();
//# sourceMappingURL=question.routes.js.map