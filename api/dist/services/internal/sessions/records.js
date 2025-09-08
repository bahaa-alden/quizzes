"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSessionRecords = void 0;
exports.getStatusAndCount = getStatusAndCount;
const question_session_repository_1 = require("../../../database/repositories/question-session.repository");
const quiz_repository_1 = require("../../../database/repositories/quiz.repository");
const session_repository_1 = require("../../../database/repositories/session.repository");
const enum_1 = require("../../../utils/enum");
const record_1 = require("../../../utils/record");
const getSessionRecords = async (requestData) => {
    const sessions = await session_repository_1.sessionRepository.findBy({
        studentId: requestData.studentId,
    });
    // Get the session questions
    const results = await Promise.all(sessions.map(async (session) => {
        let sessionQuestions = (await question_session_repository_1.questionSessionRepository.getQuestionIds(session.id));
        sessionQuestions = sessionQuestions.map((id) => id.toString());
        const quiz = (0, record_1.needRecord)(await quiz_repository_1.quizRepository.findById(session.quizId));
        const quizQuestions = quiz.questionIds;
        const { status } = getStatusAndCount(sessionQuestions, quizQuestions);
        return {
            sessionId: session.id,
            quizId: quiz.id,
            quiz,
            sessionQuestions: sessionQuestions.length,
            questions: quizQuestions.length,
            status,
            score: session.score,
        };
    }));
    return results;
};
exports.getSessionRecords = getSessionRecords;
function getStatusAndCount(sessionQuestions, questionIds) {
    let status = enum_1.SessionStatus.completed;
    if (sessionQuestions.length === 0) {
        status = enum_1.SessionStatus.pending;
    }
    else if (sessionQuestions.length < questionIds.length) {
        status = enum_1.SessionStatus.started;
    }
    return { status };
}
//# sourceMappingURL=records.js.map