"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionController = exports.QuestionController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const question_repository_1 = require("../database/repositories/question.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
const create_1 = require("../services/internal/questions/create");
class QuestionController {
    // Get all Questions by author
    getQuestions = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
                // filters
                subjectId: req.valid.query.subjectId,
            },
            fields: req.valid.query.fields,
            search: req.valid.query.search,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const questions = await question_repository_1.questionRepository.findForAdmin(options);
        res.ok({ message: 'success', data: questions });
    });
    // Get question by Id for authenticated user
    getQuestion = (0, asyncHandler_1.default)(async (req, res) => {
        const question = (0, record_1.needRecord)(await question_repository_1.questionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Question not found'));
        res.ok({ message: 'success', data: question });
    });
    // Create question handler
    createQuestion = (0, asyncHandler_1.default)(async (req, res, next) => {
        const question = await (0, create_1.createQuestion)(req.valid.body);
        res.created({ message: 'Question has been created', data: question });
    });
    // Update question by Id for authenticated user
    updateQuestion = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const question = (0, record_1.needRecord)(await question_repository_1.questionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Question not found'));
        if (updateBody.answers) {
            updateBody.answers = updateBody.answers.map((ans, index) => ({
                ...ans,
                sorting: index + 1,
            }));
        }
        const data = await question_repository_1.questionRepository.patchById(question.id, updateBody);
        res.ok({ message: 'Question has been updated', data });
    });
    // Delete question by Id for authenticated user
    deleteQuestion = (0, asyncHandler_1.default)(async (req, res) => {
        const question = (0, record_1.needRecord)(await question_repository_1.questionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Question not found'));
        await question_repository_1.questionRepository.deleteById(question.id);
        res.noContent({ message: 'Question deleted successfully' });
    });
}
exports.QuestionController = QuestionController;
exports.questionController = new QuestionController();
//# sourceMappingURL=question.controller.js.map