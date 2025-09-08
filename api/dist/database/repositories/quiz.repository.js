"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizRepository = exports.QuizRepository = void 0;
const date_fns_1 = require("date-fns");
const order_1 = require("../../utils/order");
const base_repository_1 = require("./base.repository");
const quiz_model_1 = require("../models/quiz.model");
const projection_1 = require("../../utils/projection");
class QuizRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(quiz_model_1.default);
    }
    async patchById(id, data) {
        return await this.model
            .findByIdAndUpdate(id, data, { new: true })
            .populate(['questionIds', 'teacher', 'subject']);
    }
    async findById(id) {
        return await this.model
            .findOne({ _id: id, deletedAt: null })
            .populate(['questionIds', 'teacher', 'subject']);
    }
    async findForAdmin(options) {
        const { order, pagination, search, filter, fields } = options;
        const query = { deletedAt: null };
        if (filter?.teacherId) {
            query.teacherId = filter.teacherId;
        }
        if (filter?.subjectId) {
            query.subjectId = filter.subjectId;
        }
        if (filter?.status) {
            query.status = filter.status;
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
            .populate(['questionIds']);
        if (fields) {
            queryResult.select((0, projection_1.selectedFields)(fields));
        }
        const results = await queryResult;
        return { results, total };
    }
}
exports.QuizRepository = QuizRepository;
exports.quizRepository = new QuizRepository();
//# sourceMappingURL=quiz.repository.js.map