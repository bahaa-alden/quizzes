"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsRoutes = exports.StatisticsRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const statistics_schema_1 = require("../schemas/statistics.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const authorization_1 = require("../middlewares/authorization");
const statistics_controller_1 = require("../controllers/statistics.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const { USER, ADMIN, TEACHER } = enum_1.RoleCode;
class StatisticsRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL STATISTICS
        this.router.get('/', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: statistics_schema_1.default.statisticsAll }), statistics_controller_1.statisticsController.getStatistics);
    }
}
exports.StatisticsRoutes = StatisticsRoutes;
exports.statisticsRoutes = new StatisticsRoutes();
//# sourceMappingURL=statistics.routes.js.map