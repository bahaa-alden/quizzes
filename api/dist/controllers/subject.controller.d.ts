import { Response } from 'express';
export declare class SubjectController {
    getSubjects: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getSubject: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createSubject: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateSubject: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteSubject: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const subjectController: SubjectController;
