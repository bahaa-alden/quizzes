"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const enum_1 = require("./../../utils/enum");
const mongoose_2 = require("mongoose");
const lodash_1 = require("lodash");
const sessionSchema = new mongoose_2.Schema({
    // <creating-property-schema />
    score: {
        type: Number,
    },
    quizId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'Quiz',
    },
    studentId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
    },
    status: {
        type: String,
        enum: Object.values(enum_1.SessionStatus),
        default: enum_1.SessionStatus.started,
    },
    deletedAt: {
        type: Date,
        default: null,
    },
}, {
    collection: 'Session',
    timestamps: true,
    toJSON: {
        virtuals: true,
        transform: (_, ret) => (0, lodash_1.omit)(ret, ['deletedAt', '__v', '_id']),
    },
});
sessionSchema.virtual('student', {
    localField: 'studentId',
    foreignField: '_id',
    ref: 'User',
    justOne: true,
    match: { deletedAt: null },
});
sessionSchema.virtual('quiz', {
    localField: 'quizId',
    foreignField: '_id',
    ref: 'Quiz',
    justOne: true,
    match: { deletedAt: null },
});
sessionSchema.virtual('questionSessions', {
    localField: '_id',
    foreignField: 'sessionId',
    ref: 'QuestionSession',
    match: { deletedAt: null },
});
exports.default = (0, mongoose_2.model)('Session', sessionSchema);
//# sourceMappingURL=session.model.js.map