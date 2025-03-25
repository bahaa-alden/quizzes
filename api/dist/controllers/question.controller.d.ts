import { Response } from 'express';
export declare class QuestionController {
    getQuestions: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getQuestion: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createQuestion: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateQuestion: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteQuestion: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const questionController: QuestionController;
