"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingRoutes = exports.SettingRoutes = void 0;
const express_1 = require("express");
const validator_1 = require("../middlewares/validator");
const setting_schema_1 = require("../schemas/setting.schema");
const restrict_1 = require("../middlewares/restrict");
const enum_1 = require("../utils/enum");
const setting_controller_1 = require("../controllers/setting.controller");
const auth_schema_1 = require("../schemas/auth.schema");
const authJwt_1 = require("../middlewares/authJwt");
const authorization_1 = require("../middlewares/authorization");
const { USER, ADMIN, TEACHER } = enum_1.RoleCode;
class SettingRoutes {
    router;
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        // PROTECTED ROUTES
        this.router.use((0, validator_1.default)({ headers: auth_schema_1.default.auth }), authJwt_1.authMiddleware.authenticateJWT);
        // GET ALL SETTINGS
        this.router.get('/', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ query: setting_schema_1.default.settingAll }), setting_controller_1.settingController.getSettings);
        // GET SETTING BY ID
        this.router.get('/:id', (0, restrict_1.default)(USER, ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: setting_schema_1.default.settingId }), setting_controller_1.settingController.getSetting);
        // CREATE SETTING
        this.router.post('/', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ body: setting_schema_1.default.settingCreate }), setting_controller_1.settingController.createSetting);
        // UPDATE SETTING BY ID
        this.router.patch('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({
            params: setting_schema_1.default.settingId,
            body: setting_schema_1.default.settingUpdate,
        }), setting_controller_1.settingController.updateSetting);
        // DELETE SETTING BY ID
        this.router.delete('/:id', (0, restrict_1.default)(ADMIN, TEACHER), authorization_1.authorizationMiddleware.authorization, (0, validator_1.default)({ params: setting_schema_1.default.settingId }), setting_controller_1.settingController.deleteSetting);
    }
}
exports.SettingRoutes = SettingRoutes;
exports.settingRoutes = new SettingRoutes();
//# sourceMappingURL=setting.routes.js.map