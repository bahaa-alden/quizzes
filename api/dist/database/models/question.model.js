"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const questionAnswerSchema = new mongoose_2.Schema({
    // <creating-property-object-answers />
    isCorrect: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
    },
    sorting: {
        type: Number,
    },
}, {
    toJSON: {
        virtuals: true,
        transform: (_, ret) => (0, lodash_1.omit)(ret, ['__v', '_id']),
    },
});
const questionSchema = new mongoose_2.Schema({
    // <creating-property-schema />
    subjectId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Subject',
    },
    answers: {
        type: [questionAnswerSchema],
        default: [],
    },
    text: {
        type: String,
        index: 'text',
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    collection: 'Question',
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => (0, lodash_1.omit)(ret, ['deletedAt', '__v', '_id']),
    },
});
questionSchema.virtual('subject', {
    localField: 'subjectId',
    foreignField: '_id',
    ref: 'Subject',
    justOne: true,
    match: { deletedAt: null },
});
exports.default = (0, mongoose_2.model)('Question', questionSchema);
//# sourceMappingURL=question.model.js.map