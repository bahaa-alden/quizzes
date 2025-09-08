"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizController = exports.QuizController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const quiz_repository_1 = require("../database/repositories/quiz.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
const quiz_question_repository_1 = require("../database/repositories/quiz-question.repository");
const create_1 = require("../services/internal/questions/create");
const question_repository_1 = require("../database/repositories/question.repository");
const subject_repository_1 = require("../database/repositories/subject.repository");
class QuizController {
    // Get all Quizzes by author
    getQuizzes = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
                // filters
                teacherId: req.valid.query.teacherId,
                subjectId: req.valid.query.subjectId,
                status: req.valid.query.status,
                dateFrom: req.valid.query.dateFrom,
                dateTo: req.valid.query.dateTo,
            },
            fields: req.valid.query.fields,
            search: req.valid.query.search,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const quizzes = await quiz_repository_1.quizRepository.findForAdmin(options);
        res.ok({ message: 'success', data: quizzes });
    });
    // Get quiz by Id for authenticated user
    getQuiz = (0, asyncHandler_1.default)(async (req, res) => {
        const quiz = (0, record_1.needRecord)(await quiz_repository_1.quizRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Quiz not found'));
        res.ok({ message: 'success', data: quiz });
    });
    // Create quiz handler
    createQuiz = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newQuiz = req.valid.body;
        const subject = (0, record_1.needRecord)(await subject_repository_1.subjectRepository.findById(newQuiz.subjectId), new ApiError_1.NotFoundError('Subject not found'));
        const quiz = await quiz_repository_1.quizRepository.insert({
            teacherId: subject.teacherId,
            ...newQuiz,
        });
        if (quiz === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'Quiz has been created', data: quiz });
    });
    // Update quiz by Id for authenticated user
    updateQuiz = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const quiz = (0, record_1.needRecord)(await quiz_repository_1.quizRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Quiz not found'));
        const data = await quiz_repository_1.quizRepository.patchById(quiz.id, updateBody);
        res.ok({ message: 'Quiz has been updated', data });
    });
    // Delete quiz by Id for authenticated user
    deleteQuiz = (0, asyncHandler_1.default)(async (req, res) => {
        const quiz = (0, record_1.needRecord)(await quiz_repository_1.quizRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Quiz not found'));
        await quiz_repository_1.quizRepository.deleteById(quiz.id);
        res.noContent({ message: 'Quiz deleted successfully' });
    });
    // Create question handler
    addQuestions = (0, asyncHandler_1.default)(async (req, res, next) => {
        const { body } = req.valid;
        const quiz = (0, record_1.needRecord)(await quiz_repository_1.quizRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Quiz not found'));
        const toInsQuestions = [];
        if (body.questions) {
            toInsQuestions.push(...(await Promise.all(body.questions.map(async (e) => await (0, create_1.createQuestion)(e)))));
        }
        if (body.questionIds) {
            const questions = await question_repository_1.questionRepository.findByIds(body.questionIds);
            toInsQuestions.push(...questions);
        }
        await Promise.all(toInsQuestions.map(async (question) => await quiz_question_repository_1.quizQuestionRepository.insert({
            quizId: quiz.id,
            questionId: question.id,
        })));
        const updatedQuiz = (0, record_1.needRecord)(await quiz_repository_1.quizRepository.findById(quiz.id));
        res.created({ message: 'Question has been created', data: updatedQuiz });
    });
}
exports.QuizController = QuizController;
exports.quizController = new QuizController();
//# sourceMappingURL=quiz.controller.js.map