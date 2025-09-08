"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizQuestionRepository = exports.QuizQuestionRepository = void 0;
const date_fns_1 = require("date-fns");
const order_1 = require("../../utils/order");
const base_repository_1 = require("./base.repository");
const quiz_question_model_1 = require("../models/quiz-question.model");
const projection_1 = require("../../utils/projection");
class QuizQuestionRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(quiz_question_model_1.default);
    }
    async getQuestionIds(quizId) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return await this.model
            .find({ quizId, deletedAt: null })
            .distinct('questionId');
    }
    async findForAdmin(options) {
        const { order, pagination, search, filter, fields } = options;
        const query = { deletedAt: null };
        if (filter?.quizId) {
            query.quizId = filter.quizId;
        }
        if (filter?.dateFrom ?? filter?.dateTo) {
            query.createdAt = {};
            if (filter.dateFrom) {
                query.createdAt.$gte = (0, date_fns_1.startOfDay)(filter.dateFrom);
            }
            if (filter.dateTo) {
                query.createdAt.$lte = (0, date_fns_1.endOfDay)(filter.dateTo);
            }
        }
        if (search) {
            query.$or = [];
        }
        const total = await this.model.where(query).countDocuments();
        const queryResult = this.model
            .find(query)
            .sort({
            [order.column]: order.direction === order_1.OrderDirection.asc ? 1 : -1,
        })
            .limit(pagination.pageSize)
            .skip((pagination.page - 1) * pagination.pageSize)
            .populate(['question']);
        if (fields) {
            queryResult.select((0, projection_1.selectedFields)(fields));
        }
        const results = await queryResult;
        return { results, total };
    }
}
exports.QuizQuestionRepository = QuizQuestionRepository;
exports.quizQuestionRepository = new QuizQuestionRepository();
//# sourceMappingURL=quiz-question.repository.js.map