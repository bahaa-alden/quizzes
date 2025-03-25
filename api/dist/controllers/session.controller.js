"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionController = exports.SessionController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const session_repository_1 = require("../database/repositories/session.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
const records_1 = require("../services/internal/sessions/records");
class SessionController {
    // Get all Sessions by author
    getSessions = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
                // filters
                status: req.valid.query.status,
                studentId: req.valid.query.studentId,
                quizId: req.valid.query.quizId,
                dateFrom: req.valid.query.dateFrom,
                dateTo: req.valid.query.dateTo,
            },
            fields: req.valid.query.fields,
            search: req.valid.query.search,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const sessions = await session_repository_1.sessionRepository.findForAdmin(options);
        res.ok({ message: 'success', data: sessions });
    });
    getRecords = (0, asyncHandler_1.default)(async (req, res, next) => {
        const records = await (0, records_1.getSessionRecords)({ studentId: req.user.id });
        res.ok({ message: 'success', data: records });
    });
    // Get session by Id for authenticated user
    getSession = (0, asyncHandler_1.default)(async (req, res) => {
        const session = (0, record_1.needRecord)(await session_repository_1.sessionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Session not found'));
        res.ok({ message: 'success', data: session });
    });
    // Create session handler
    createSession = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newSession = req.valid.body;
        if (!req.valid.body.studentId) {
            req.valid.body.studentId = req.user.id;
        }
        const session = await session_repository_1.sessionRepository.insert(newSession);
        if (session === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'Session has been created', data: session });
    });
    // Update session by Id for authenticated user
    updateSession = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const session = (0, record_1.needRecord)(await session_repository_1.sessionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Session not found'));
        const data = await session_repository_1.sessionRepository.patchById(session.id, updateBody);
        res.ok({ message: 'Session has been updated', data });
    });
    // Delete session by Id for authenticated user
    deleteSession = (0, asyncHandler_1.default)(async (req, res) => {
        const session = (0, record_1.needRecord)(await session_repository_1.sessionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Session not found'));
        await session_repository_1.sessionRepository.deleteById(session.id);
        res.noContent({ message: 'Session deleted successfully' });
    });
}
exports.SessionController = SessionController;
exports.sessionController = new SessionController();
//# sourceMappingURL=session.controller.js.map