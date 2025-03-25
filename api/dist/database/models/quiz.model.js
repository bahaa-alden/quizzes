"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./../../utils/enum");
const mongoose_1 = require("mongoose");
const lodash_1 = require("lodash");
const quizSchema = new mongoose_1.Schema({
    // <creating-property-schema />
    duration: {
        type: Number,
    },
    numberOfAttempts: {
        type: Number,
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
exports.default = (0, mongoose_1.model)('Quiz', quizSchema);
//# sourceMappingURL=quiz.model.js.map