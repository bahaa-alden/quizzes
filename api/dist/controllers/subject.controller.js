"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subjectController = exports.SubjectController = void 0;
const ApiError_1 = require("../core/ApiError");
const asyncHandler_1 = require("../middlewares/asyncHandler");
const subject_repository_1 = require("../database/repositories/subject.repository");
const order_1 = require("../utils/order");
const pagination_1 = require("../utils/pagination");
const record_1 = require("../utils/record");
class SubjectController {
    // Get all Subjects by author
    getSubjects = (0, asyncHandler_1.default)(async (req, res, next) => {
        const options = {
            filter: {
                // filters
                teacherId: req.valid.query.teacherId,
            },
            search: req.valid.query.search,
            fields: req.valid.query.fields,
            order: (0, order_1.defaultOrderParams)(req.valid.query.orderColumn, req.valid.query.orderDirection),
            pagination: (0, pagination_1.defaultPaginationParams)(req.valid.query.page, req.valid.query.pageSize),
        };
        const subjects = await subject_repository_1.subjectRepository.findForAdmin(options);
        res.ok({ message: 'success', data: subjects });
    });
    // Get subject by Id for authenticated user
    getSubject = (0, asyncHandler_1.default)(async (req, res) => {
        const subject = (0, record_1.needRecord)(await subject_repository_1.subjectRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Subject not found'));
        res.ok({ message: 'success', data: subject });
    });
    // Create subject handler
    createSubject = (0, asyncHandler_1.default)(async (req, res, next) => {
        const newSubject = req.valid.body;
        const subject = await subject_repository_1.subjectRepository.insert(newSubject);
        if (subject === null) {
            throw new ApiError_1.InternalError();
        }
        res.created({ message: 'Subject has been created', data: subject });
    });
    // Update subject by Id for authenticated user
    updateSubject = (0, asyncHandler_1.default)(async (req, res, next) => {
        const updateBody = req.valid.body;
        const subject = (0, record_1.needRecord)(await subject_repository_1.subjectRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Subject not found'));
        const data = await subject_repository_1.subjectRepository.patchById(subject.id, updateBody);
        res.ok({ message: 'Subject has been updated', data });
    });
    // Delete subject by Id for authenticated user
    deleteSubject = (0, asyncHandler_1.default)(async (req, res) => {
        const subject = (0, record_1.needRecord)(await subject_repository_1.subjectRepository.findById(req.valid.params.id), new ApiError_1.NotFoundError('Subject not found'));
        await subject_repository_1.subjectRepository.deleteById(subject.id);
        res.noContent({ message: 'Subject deleted successfully' });
    });
}
exports.SubjectController = SubjectController;
exports.subjectController = new SubjectController();
//# sourceMappingURL=subject.controller.js.map