"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionSessionRoutes = exports.QuestionSessionRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const question_session_schema_1 = require("../schemas/question-session.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const question_session_controller_1 = require("../controllers/question-session.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN } = enum_1.RoleCode;
class QuestionSessionRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL QUESTIONSESSIONS
        this.router.get('/', (0, restrict_1.default)(USER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: question_session_schema_1.default.questionSessionAll }), question_session_controller_1.questionSessionController.getQuestionSessions);
        // GET QUESTIONSESSION BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: question_session_schema_1.default.questionSessionId }), question_session_controller_1.questionSessionController.getQuestionSession);
        // CREATE QUESTIONSESSION
        this.router.post('/', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: question_session_schema_1.default.questionSessionCreate }), question_session_controller_1.questionSessionController.createQuestionSession);
        // UPDATE QUESTIONSESSION BY ID
        this.router.patch('/:id', (0, restrict_1.default)(USER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: question_session_schema_1.default.questionSessionId,
            body: question_session_schema_1.default.questionSessionUpdate,
        }), question_session_controller_1.questionSessionController.updateQuestionSession);
        // DELETE QUESTIONSESSION BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: question_session_schema_1.default.questionSessionId }), question_session_controller_1.questionSessionController.deleteQuestionSession);
    }
}
exports.QuestionSessionRoutes = QuestionSessionRoutes;
exports.questionSessionRoutes = new QuestionSessionRoutes();
//# sourceMappingURL=question-session.routes.js.map