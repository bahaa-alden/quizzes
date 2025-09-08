import { Response } from 'express';
export declare class SettingController {
    getSettings: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    getSetting: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    createSetting: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    updateSetting: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
    deleteSetting: (req: import("express").Request, res: Response, next: import("express").NextFunction) => void;
}
export declare const settingController: SettingController;
