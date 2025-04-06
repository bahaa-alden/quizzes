"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const enum_1 = require("./../../utils/enum");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const quizSchema = new mongoose_2.Schema({
    // <creating-property-schema />
    teacherId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
    subjectId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Subject',
    },
    status: {
        type: String,
        enum: Object.values(enum_1.QuizStatus),
        default: enum_1.QuizStatus.disactive,
    },
    name: {
        type: String,
        index: 'text',
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    collection: 'Quiz',
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => {
            if (ret.questionIds && Array.isArray(ret.questionIds)) {
                const questionIds = ret.questionIds.map((qq) => qq.questionId.toString());
                ret.questionIds = questionIds;
            }
            return (0, lodash_1.omit)(ret, ['deletedAt', '__v', '_id']);
        },
    },
});
quizSchema.virtual('questionIds', {
    ref: 'QuizQuestion',
    localField: '_id',
    foreignField: 'quizId',
    match: { deletedAt: null },
});
quizSchema.virtual('subject', {
    localField: 'subjectId',
    foreignField: '_id',
    ref: 'Subject',
    justOne: true,
    match: { deletedAt: null },
});
quizSchema.virtual('teacher', {
    localField: 'teacherId',
    foreignField: '_id',
    ref: 'User',
    justOne: true,
    match: { deletedAt: null },
});
exports.default = (0, mongoose_2.model)('Quiz', quizSchema);
//# sourceMappingURL=quiz.model.js.map