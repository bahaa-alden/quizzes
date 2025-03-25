"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSessionRecords = void 0;
exports.getStatusAndCount = getStatusAndCount;
const question_session_repository_1 = require("../../../database/repositories/question-session.repository");
const quiz_question_repository_1 = require("../../../database/repositories/quiz-question.repository");
const quiz_repository_1 = require("../../../database/repositories/quiz.repository");
const session_repository_1 = require("../../../database/repositories/session.repository");
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
        const quizQuestions = (await quiz_question_repository_1.quizQuestionRepository.getQuestionIds(quiz.id));
        const { status } = getStatusAndCount(sessionQuestions, quizQuestions);
        return {
            sessionId: session.id,
            quizId: quiz.id,
            quiz,
            sessionQuestions: sessionQuestions.length,
            questions: quizQuestions.length,
            status,
        };
    }));
    return results;
};
exports.getSessionRecords = getSessionRecords;
function getStatusAndCount(sessionQuestions, questionIds) {
    let status = 'completed';
    if (sessionQuestions.length === 0) {
        status = 'not started';
    }
    if (sessionQuestions.length < questionIds.length) {
        status = 'processing';
    }
    return { status };
}
//# sourceMappingURL=records.js.map