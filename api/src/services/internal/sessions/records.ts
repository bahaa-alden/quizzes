import { IQuiz } from '../../../database/models/quiz.model';
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
  quiz: IQuiz;
  sessionQuestions: number;
  questions: number;
  status: string;
}

export const getSessionRecords = async (
  requestData: Input,
): Promise<Result[]> => {
  const sessions = await sessionRepository.findBy({
    studentId: requestData.studentId,
  });

  // Get the session questions
  const results = await Promise.all(
    sessions.map(async (session) => {
      let sessionQuestions = (await questionSessionRepository.getQuestionIds(
        session.id,
      )) as string[];
      sessionQuestions = sessionQuestions.map((id) => id.toString());

      const quiz = needRecord(await quizRepository.findById(session.quizId));

      const quizQuestions = (await quizQuestionRepository.getQuestionIds(
        quiz.id,
      )) as string[];

      const { status } = getStatusAndCount(sessionQuestions, quizQuestions);

      return {
        sessionId: session.id,
        quizId: quiz.id,
        quiz,
        sessionQuestions: sessionQuestions.length,
        questions: quizQuestions.length,
        status,
      };
    }),
  );

  return results;
};

export function getStatusAndCount(
  sessionQuestions: string[],
  questionIds: string[],
): { status: string } {
  let status = 'completed';
  if (sessionQuestions.length === 0) {
    status = 'not started';
  }
  if (sessionQuestions.length < questionIds.length) {
    status = 'processing';
  }
  return { status };
}
