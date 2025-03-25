import { IQuiz } from '../../../database/models/quiz.model';
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
export declare const getSessionRecords: (requestData: Input) => Promise<Result[]>;
export declare function getStatusAndCount(sessionQuestions: string[], questionIds: string[]): {
    status: string;
};
