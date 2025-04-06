import { Response, ParsedRequest } from 'express';
import {
  BadRequestError,
  InternalError,
  NotFoundError,
} from '../core/ApiError';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import {
  SettingFindOptions,
  settingRepository,
} from '../database/repositories/setting.repository';
import {
  ISettingAllSchema,
  ISettingIdSchema,
  ISettingCreateSchema,
  ISettingUpdateSchema,
} from '../schemas/setting.schema';
import { defaultOrderParams } from '../utils/order';
import { defaultPaginationParams } from '../utils/pagination';
import { needRecord } from '../utils/record';

export class SettingController {
  // Get all Settings by author
  public getSettings = asyncHandler(
    async (
      req: ParsedRequest<void, ISettingAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const options: SettingFindOptions = {
        filter: {
          // filters
        },
        search: req.valid.query.search,
        fields: req.valid.query.fields,
        order: defaultOrderParams(
          req.valid.query.orderColumn,
          req.valid.query.orderDirection,
        ),
        pagination: defaultPaginationParams(
          req.valid.query.page,
          req.valid.query.pageSize,
        ),
      };
      const settings = await settingRepository.findForAdmin(options);

      res.ok({ message: 'success', data: settings });
    },
  );

  // Get setting by Id for authenticated user
  public getSetting = asyncHandler(
    async (
      req: ParsedRequest<void, void, ISettingIdSchema>,
      res: Response,
    ): Promise<void> => {
      const setting = needRecord(
        await settingRepository.findById(req.valid.params.id),
        new NotFoundError('Setting not found'),
      );

      res.ok({ message: 'success', data: setting });
    },
  );

  // Create setting handler
  public createSetting = asyncHandler(
    async (
      req: ParsedRequest<ISettingCreateSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const settings = await settingRepository.findAll();

      if (settings.length) {
        throw new BadRequestError('Can not add more than one setting');
      }

      const newSetting = req.valid.body;
      const setting = await settingRepository.insert(newSetting);
      if (setting === null) {
        throw new InternalError();
      }
      res.created({ message: 'Setting has been created', data: setting });
    },
  );

  // Update setting by Id for authenticated user
  public updateSetting = asyncHandler(
    async (
      req: ParsedRequest<ISettingUpdateSchema, void, ISettingIdSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      const updateBody = req.valid.body;

      const setting = needRecord(
        await settingRepository.findById(req.valid.params.id),
        new NotFoundError('Setting not found'),
      );

      const data = await settingRepository.patchById(setting.id, updateBody);

      res.ok({ message: 'Setting has been updated', data });
    },
  );

  // Delete setting by Id for authenticated user
  public deleteSetting = asyncHandler(
    async (
      req: ParsedRequest<void, void, ISettingIdSchema>,
      res: Response,
    ): Promise<void> => {
      const setting = needRecord(
        await settingRepository.findById(req.valid.params.id),
        new NotFoundError('Setting not found'),
      );

      await settingRepository.deleteById(setting.id);
      res.noContent({ message: 'Setting deleted successfully' });
    },
  );
}

export const settingController = new SettingController();
