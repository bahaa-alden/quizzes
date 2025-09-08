import { Response } from 'express';
export declare class QuestionSessionController {
    getQuestionSessions: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getQuestionSession: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createQuestionSession: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateQuestionSession: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteQuestionSession: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const questionSessionController: QuestionSessionController;
