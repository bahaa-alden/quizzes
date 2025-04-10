"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionRoutes = exports.SessionRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const session_schema_1 = require("../schemas/session.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const session_controller_1 = require("../controllers/session.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN, TEACHER } = enum_1.RoleCode;
class SessionRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL SESSIONS
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: session_schema_1.default.sessionAll }), session_controller_1.sessionController.getSessions);
        // GET ALL SESSIONS
        this.router.get('/records', (0, restrict_1.default)(USER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: session_schema_1.default.sessionRecord }), session_controller_1.sessionController.getRecords);
        // GET SESSION BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: session_schema_1.default.sessionId }), session_controller_1.sessionController.getSession);
        // CREATE SESSION
        this.router.post('/', (0, restrict_1.default)(USER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: session_schema_1.default.sessionCreate }), session_controller_1.sessionController.createSession);
        // RESET SESSION BY ID
        this.router.post('/:id/reset', (0, restrict_1.default)(USER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: session_schema_1.default.sessionId,
        }), session_controller_1.sessionController.resetSession);
        // UPDATE SESSION BY ID
        this.router.patch('/:id', (0, restrict_1.default)(USER, TEACHER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: session_schema_1.default.sessionId,
            body: session_schema_1.default.sessionUpdate,
        }), session_controller_1.sessionController.updateSession);
        // DELETE SESSION BY ID
        this.router.delete('/:id', (0, restrict_1.default)(TEACHER, ADMIN), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: session_schema_1.default.sessionId }), session_controller_1.sessionController.deleteSession);
    }
}
exports.SessionRoutes = SessionRoutes;
exports.sessionRoutes = new SessionRoutes();
//# sourceMappingURL=session.routes.js.map