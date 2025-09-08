"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizQuestionController = exports.QuizQuestionController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const quiz_question_repository_1 = require("../database/repositories/quiz-question.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
class QuizQuestionController {
    // Get all QuizQuestions by author
    getQuizQuestions = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
                // filters
                quizId: req.valid.query.quizId,
                dateFrom: req.valid.query.dateFrom,
                dateTo: req.valid.query.dateTo,
            },
            fields: req.valid.query.fields,
            search: req.valid.query.search,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const quizQuestions = await quiz_question_repository_1.quizQuestionRepository.findForAdmin(options);
        res.ok({ message: 'success', data: quizQuestions });
    });
    // Get quizQuestion by Id for authenticated user
    getQuizQuestion = (0, asyncHandler_1.default)(async (req, res) => {
        const quizQuestion = (0, record_1.needRecord)(await quiz_question_repository_1.quizQuestionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('QuizQuestion not found'));
        res.ok({ message: 'success', data: quizQuestion });
    });
    // Create quizQuestion handler
    createQuizQuestion = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newQuizQuestion = req.valid.body;
        const quizQuestion = await quiz_question_repository_1.quizQuestionRepository.insert(newQuizQuestion);
        if (quizQuestion === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({
            message: 'QuizQuestion has been created',
            data: quizQuestion,
        });
    });
    // Update quizQuestion by Id for authenticated user
    updateQuizQuestion = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const quizQuestion = (0, record_1.needRecord)(await quiz_question_repository_1.quizQuestionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('QuizQuestion not found'));
        const data = await quiz_question_repository_1.quizQuestionRepository.patchById(quizQuestion.id, updateBody);
        res.ok({ message: 'QuizQuestion has been updated', data });
    });
    // Delete quizQuestion by Id for authenticated user
    deleteQuizQuestion = (0, asyncHandler_1.default)(async (req, res) => {
        const quizQuestion = (0, record_1.needRecord)(await quiz_question_repository_1.quizQuestionRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('QuizQuestion not found'));
        await quiz_question_repository_1.quizQuestionRepository.deleteById(quizQuestion.id);
        res.noContent({ message: 'QuizQuestion deleted successfully' });
    });
}
exports.QuizQuestionController = QuizQuestionController;
exports.quizQuestionController = new QuizQuestionController();
//# sourceMappingURL=quiz-question.controller.js.map