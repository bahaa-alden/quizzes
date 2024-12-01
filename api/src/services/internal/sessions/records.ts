import { questionSessionRepository } from '../../../database/repositories/question-session.repository';
import { quizQuestionRepository } from '../../../database/repositories/quiz-question.repository';
import { quizRepository } from '../../../database/repositories/quiz.repository';
import { sessionRepository } from '../../../database/repositories/session.repository';
import { needRecord } from '../../../utils/record';

export interface Input {
  studentId: string;
}

export interface Result {
  quizId: string;
  quiz: object;
  questionInSession: number;
  question: number;
  status: string;
}

export const getSessionRecords = async (
  requestData: Input,
): Promise<Result[]> => {
  const results: Result[] = [];

  const sessions = await sessionRepository.findBy({
    studentId: requestData.studentId,
  });

  // Get the session questions
  sessions.forEach(async (session) => {
    let sessionQuestions = (await questionSessionRepository.getQuestionIds(
      session.id,
    )) as string[];
    sessionQuestions = sessionQuestions.map((id) => id.toString());

    const quiz = needRecord(await quizRepository.findById(session.quizId));

    const quizQuestions = (await quizQuestionRepository.getQuestionIds(
      quiz.id,
    )) as string[];

    const { questionInSession, status } = getStatusAndCount(
      sessionQuestions,
      quizQuestions,
    );

    results.push({
      quizId: quiz.id,
      quiz,
      questionInSession,
      question: quizQuestions.length,
      status,
    });
  });

  return results;
};

export function getStatusAndCount(
  sessionQuestions: string[],
  questionIds: string[],
): { status: string; questionInSession: number } {
  const questionInSession = questionIds.filter((ques) =>
    sessionQuestions.includes(ques.toString()),
  ).length;
  let status = 'completed';
  if (questionInSession === 0) {
    status = 'not started';
  }
  if (questionInSession < questionIds.length) {
    status = 'processing';
  }
  return { status, questionInSession };
}
