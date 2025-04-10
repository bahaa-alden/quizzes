import { IQuiz } from '../../../database/models/quiz.model';
import { questionSessionRepository } from '../../../database/repositories/question-session.repository';
import { quizRepository } from '../../../database/repositories/quiz.repository';
import { sessionRepository } from '../../../database/repositories/session.repository';
import { SessionStatus } from '../../../utils/enum';
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

      const quizQuestions = quiz.questionIds as unknown as string[];

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
  let status = SessionStatus.completed;
  if (sessionQuestions.length === 0) {
    status = SessionStatus.pending;
  } else if (sessionQuestions.length < questionIds.length) {
    status = SessionStatus.started;
  }
  return { status };
}
