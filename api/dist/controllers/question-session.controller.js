"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionSessionController = exports.QuestionSessionController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const question_session_repository_1 = require("../database/repositories/question-session.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
class QuestionSessionController {
    // Get all QuestionSessions by author
    getQuestionSessions = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
                // filters
                sessionId: req.valid.query.sessionId,
                bookmarked: req.valid.query.bookmarked,
                status: req.valid.query.status,
            },
            fields: req.valid.query.fields,
            search: req.valid.query.search,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const questionSessions = await question_session_repository_1.questionSessionRepository.findForAdmin(options);
        res.ok({ message: 'success', data: questionSessions });
    });
    // Get questionSession by Id for authenticated user
    getQuestionSession = (0, asyncHandler_1.default)(async (req, res) => {
        const questionSession = (0, record_1.needRecord)(await question_session_repository_1.questionSessionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('QuestionSession not found'));
        res.ok({ message: 'success', data: questionSession });
    });
    // Create questionSession handler
    createQuestionSession = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newQuestionSession = req.valid.body;
        const questionSession = await question_session_repository_1.questionSessionRepository.insert(newQuestionSession);
        if (questionSession === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({
            message: 'QuestionSession has been created',
            data: questionSession,
        });
    });
    // Update questionSession by Id for authenticated user
    updateQuestionSession = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const questionSession = (0, record_1.needRecord)(await question_session_repository_1.questionSessionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('QuestionSession not found'));
        const data = await question_session_repository_1.questionSessionRepository.patchById(questionSession.id, updateBody);
        res.ok({ message: 'QuestionSession has been updated', data });
    });
    // Delete questionSession by Id for authenticated user
    deleteQuestionSession = (0, asyncHandler_1.default)(async (req, res) => {
        const questionSession = (0, record_1.needRecord)(await question_session_repository_1.questionSessionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('QuestionSession not found'));
        await question_session_repository_1.questionSessionRepository.deleteById(questionSession.id);
        res.noContent({ message: 'QuestionSession deleted successfully' });
    });
}
exports.QuestionSessionController = QuestionSessionController;
exports.questionSessionController = new QuestionSessionController();
//# sourceMappingURL=question-session.controller.js.map