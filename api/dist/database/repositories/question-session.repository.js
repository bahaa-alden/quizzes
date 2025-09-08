"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionSessionRepository = exports.QuestionSessionRepository = void 0;
const order_1 = require("../../utils/order");
const base_repository_1 = require("./base.repository");
const question_session_model_1 = require("../models/question-session.model");
const projection_1 = require("../../utils/projection");
class QuestionSessionRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(question_session_model_1.default);
    }
    async deleteSessionQuestions(sessionId) {
        return await this.model.updateMany({ sessionId, deletedAt: null }, { $set: { deletedAt: new Date() } });
    }
    async getQuestionIds(sessionId) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return await this.model
            .find({ sessionId, deletedAt: null })
            .distinct('questionId');
    }
    async findForAdmin(options) {
        const { order, pagination, search, filter, fields } = options;
        const query = { deletedAt: null };
        if (typeof filter?.bookmarked === 'boolean') {
            query.bookmarked = filter.bookmarked;
        }
        if (filter?.status) {
            query.status = filter.status;
        }
        if (filter?.sessionId) {
            query.sessionId = filter.sessionId;
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
exports.QuestionSessionRepository = QuestionSessionRepository;
exports.questionSessionRepository = new QuestionSessionRepository();
//# sourceMappingURL=question-session.repository.js.map