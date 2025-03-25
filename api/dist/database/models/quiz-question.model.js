"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const quizQuestionSchema = new mongoose_2.Schema({
    // <creating-property-schema />
    questionId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Question',
    },
    quizId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Quiz',
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    collection: 'QuizQuestion',
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => (0, lodash_1.omit)(ret, ['deletedAt', '__v', '_id']),
    },
});
quizQuestionSchema.virtual('quiz', {
    localField: 'quizId',
    foreignField: '_id',
    ref: 'Quiz',
    justOne: true,
    match: { deletedAt: null },
});
quizQuestionSchema.virtual('question', {
    localField: 'questionId',
    foreignField: '_id',
    ref: 'Question',
    justOne: true,
    match: { deletedAt: null },
});
exports.default = (0, mongoose_2.model)('QuizQuestion', quizQuestionSchema);
//# sourceMappingURL=quiz-question.model.js.map