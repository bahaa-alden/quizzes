"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const enum_1 = require("./../../utils/enum");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const questionSessionSchema = new mongoose_2.Schema({
    // <creating-property-schema />
    sessionId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Session',
    },
    questionId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Question',
    },
    time: {
        type: Number,
    },
    status: {
        type: String,
        enum: Object.values(enum_1.QuestionSessionStatus),
        default: enum_1.QuestionSessionStatus.started,
    },
    bookmarked: {
        type: Boolean,
        default: false,
    },
    answer: {
        type: Number,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    collection: 'QuestionSession',
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => (0, lodash_1.omit)(ret, ['deletedAt', '__v', '_id']),
    },
});
questionSessionSchema.virtual('question', {
    localField: 'questionId',
    foreignField: '_id',
    ref: 'Question',
    justOne: true,
    match: { deletedAt: null },
});
questionSessionSchema.virtual('session', {
    localField: 'sessionId',
    foreignField: '_id',
    ref: 'Session',
    justOne: true,
    match: { deletedAt: null },
});
exports.default = (0, mongoose_2.model)('QuestionSession', questionSessionSchema);
//# sourceMappingURL=question-session.model.js.map