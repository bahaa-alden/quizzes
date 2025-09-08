"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizQuestionRoutes = exports.QuizQuestionRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const quiz_question_schema_1 = require("../schemas/quiz-question.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const quiz_question_controller_1 = require("../controllers/quiz-question.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN, TEACHER } = enum_1.RoleCode;
class QuizQuestionRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL QUIZ_QUESTIONS
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: quiz_question_schema_1.default.quizQuestionAll }), quiz_question_controller_1.quizQuestionController.getQuizQuestions);
        // GET QUIZ_QUESTION BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: quiz_question_schema_1.default.quizQuestionId }), quiz_question_controller_1.quizQuestionController.getQuizQuestion);
        // CREATE QUIZ_QUESTION
        this.router.post('/', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: quiz_question_schema_1.default.quizQuestionCreate }), quiz_question_controller_1.quizQuestionController.createQuizQuestion);
        // UPDATE QUIZ_QUESTION BY ID
        this.router.patch('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: quiz_question_schema_1.default.quizQuestionId,
            body: quiz_question_schema_1.default.quizQuestionUpdate,
        }), quiz_question_controller_1.quizQuestionController.updateQuizQuestion);
        // DELETE QUIZ_QUESTION BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: quiz_question_schema_1.default.quizQuestionId }), quiz_question_controller_1.quizQuestionController.deleteQuizQuestion);
    }
}
exports.QuizQuestionRoutes = QuizQuestionRoutes;
exports.quizQuestionRoutes = new QuizQuestionRoutes();
//# sourceMappingURL=quiz-question.routes.js.map