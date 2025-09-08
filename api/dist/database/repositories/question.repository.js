"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRepository = exports.QuestionRepository = void 0;
const order_1 = require("../../utils/order");
const base_repository_1 = require("./base.repository");
const question_model_1 = require("../models/question.model");
const projection_1 = require("../../utils/projection");
class QuestionRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(question_model_1.default);
    }
    async patchById(id, data) {
        return await this.model
            .findByIdAndUpdate(id, data, { new: true })
            .populate(['subject']);
    }
    async findById(id) {
        return await this.model
            .findOne({ _id: id, deletedAt: null })
            .populate(['subject']);
    }
    async findForAdmin(options) {
        const { order, pagination, search, fields, filter } = options;
        const query = { deletedAt: null };
        if (filter?.subjectId) {
            query.subjectId = filter.subjectId;
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
            .skip((pagination.page - 1) * pagination.pageSize);
        console.log(fields);
        if (fields) {
            queryResult.select((0, projection_1.selectedFields)(fields));
        }
        const results = await queryResult;
        return { results, total };
    }
}
exports.QuestionRepository = QuestionRepository;
exports.questionRepository = new QuestionRepository();
//# sourceMappingURL=question.repository.js.map