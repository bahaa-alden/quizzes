"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectRepository = exports.SubjectRepository = void 0;
const order_1 = require("../../utils/order");
const base_repository_1 = require("./base.repository");
const subject_model_1 = require("../models/subject.model");
const projection_1 = require("../../utils/projection");
class SubjectRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(subject_model_1.default);
    }
    async findById(id) {
        return this.model
            .findOne({ _id: id, deletedAt: null })
            .populate(['teacher']);
    }
    async findForAdmin(options) {
        const { order, pagination, search, fields, filter } = options;
        const query = { deletedAt: null };
        if (filter?.teacherId) {
            query.teacherId = filter.teacherId;
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
            .populate(['teacher']);
        if (fields) {
            queryResult.select((0, projection_1.selectedFields)(fields));
        }
        const results = await queryResult;
        return { results, total };
    }
}
exports.SubjectRepository = SubjectRepository;
exports.subjectRepository = new SubjectRepository();
//# sourceMappingURL=subject.repository.js.map