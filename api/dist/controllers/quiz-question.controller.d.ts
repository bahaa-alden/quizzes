import { Response } from 'express';
export declare class QuizQuestionController {
    getQuizQuestions: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getQuizQuestion: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createQuizQuestion: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateQuizQuestion: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteQuizQuestion: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const quizQuestionController: QuizQuestionController;
