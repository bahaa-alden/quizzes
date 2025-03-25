import { Response } from 'express';
export declare class QuizController {
    getQuizzes: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getQuiz: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createQuiz: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateQuiz: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteQuiz: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    addQuestions: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const quizController: QuizController;
