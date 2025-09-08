"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingController = exports.SettingController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const setting_repository_1 = require("../database/repositories/setting.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
class SettingController {
    // Get all Settings by author
    getSettings = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
            // filters
            },
            search: req.valid.query.search,
            fields: req.valid.query.fields,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const settings = await setting_repository_1.settingRepository.findForAdmin(options);
        res.ok({ message: 'success', data: settings });
    });
    // Get setting by Id for authenticated user
    getSetting = (0, asyncHandler_1.default)(async (req, res) => {
        const setting = (0, record_1.needRecord)(await setting_repository_1.settingRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Setting not found'));
        res.ok({ message: 'success', data: setting });
    });
    // Create setting handler
    createSetting = (0, asyncHandler_1.default)(async (req, res, next) => {
        const settings = await setting_repository_1.settingRepository.findAll();
        if (settings.length) {
            throw new ApiError_1.BadRequestError('Can not add more than one setting');
        }
        const newSetting = req.valid.body;
        const setting = await setting_repository_1.settingRepository.insert(newSetting);
        if (setting === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'Setting has been created', data: setting });
    });
    // Update setting by Id for authenticated user
    updateSetting = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const setting = (0, record_1.needRecord)(await setting_repository_1.settingRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Setting not found'));
        const data = await setting_repository_1.settingRepository.patchById(setting.id, updateBody);
        res.ok({ message: 'Setting has been updated', data });
    });
    // Delete setting by Id for authenticated user
    deleteSetting = (0, asyncHandler_1.default)(async (req, res) => {
        const setting = (0, record_1.needRecord)(await setting_repository_1.settingRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Setting not found'));
        await setting_repository_1.settingRepository.deleteById(setting.id);
        res.noContent({ message: 'Setting deleted successfully' });
    });
}
exports.SettingController = SettingController;
exports.settingController = new SettingController();
//# sourceMappingURL=setting.controller.js.map