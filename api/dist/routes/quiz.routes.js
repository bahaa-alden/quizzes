"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizRoutes = exports.QuizRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const quiz_schema_1 = require("../schemas/quiz.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const quiz_controller_1 = require("../controllers/quiz.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN, TEACHER } = enum_1.RoleCode;
class QuizRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL QUIZZES
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: quiz_schema_1.default.quizAll }), quiz_controller_1.quizController.getQuizzes);
        // GET QUIZ BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: quiz_schema_1.default.quizId }), quiz_controller_1.quizController.getQuiz);
        // CREATE QUIZ
        this.router.post('/', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: quiz_schema_1.default.quizCreate }), quiz_controller_1.quizController.createQuiz);
        // CREATE QUIZ
        this.router.post('/:id/questions', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: quiz_schema_1.default.addQuestions, params: quiz_schema_1.default.quizId }), quiz_controller_1.quizController.addQuestions);
        // UPDATE QUIZ BY ID
        this.router.patch('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: quiz_schema_1.default.quizId, body: quiz_schema_1.default.quizUpdate }), quiz_controller_1.quizController.updateQuiz);
        // DELETE QUIZ BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: quiz_schema_1.default.quizId }), quiz_controller_1.quizController.deleteQuiz);
    }
}
exports.QuizRoutes = QuizRoutes;
exports.quizRoutes = new QuizRoutes();
//# sourceMappingURL=quiz.routes.js.map