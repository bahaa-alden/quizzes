"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectRoutes = exports.SubjectRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const subject_schema_1 = require("../schemas/subject.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const subject_controller_1 = require("../controllers/subject.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN, TEACHER } = enum_1.RoleCode;
class SubjectRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL SUBJECTS
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: subject_schema_1.default.subjectAll }), subject_controller_1.subjectController.getSubjects);
        // GET SUBJECT BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: subject_schema_1.default.subjectId }), subject_controller_1.subjectController.getSubject);
        // CREATE SUBJECT
        this.router.post('/', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: subject_schema_1.default.subjectCreate }), subject_controller_1.subjectController.createSubject);
        // UPDATE SUBJECT BY ID
        this.router.patch('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: subject_schema_1.default.subjectId,
            body: subject_schema_1.default.subjectUpdate,
        }), subject_controller_1.subjectController.updateSubject);
        // DELETE SUBJECT BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: subject_schema_1.default.subjectId }), subject_controller_1.subjectController.deleteSubject);
    }
}
exports.SubjectRoutes = SubjectRoutes;
exports.subjectRoutes = new SubjectRoutes();
//# sourceMappingURL=subject.routes.js.map