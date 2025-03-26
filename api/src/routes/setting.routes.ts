import { Router } from 'express';
import validator from '../middlewares/validator';
import settingSchema from '../schemas/setting.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { settingController } from '../controllers/setting.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';
import { authorizationMiddleware } from '../middlewares/authorization';

const { USER, ADMIN } = RoleCode;

export class SettingRoutes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    // PROTECTED ROUTES
    this.router.use(
      validator({ headers: authSchema.auth }),
      authMiddleware.authenticateJWT,
    );

    // GET ALL SETTINGS
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: settingSchema.settingAll }),
      settingController.getSettings,
    );

    // GET SETTING BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: settingSchema.settingId }),
      settingController.getSetting,
    );

    // CREATE SETTING
    this.router.post(
      '/',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: settingSchema.settingCreate }),
      settingController.createSetting,
    );

    // UPDATE SETTING BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({
        params: settingSchema.settingId,
        body: settingSchema.settingUpdate,
      }),
      settingController.updateSetting,
    );

    // DELETE SETTING BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: settingSchema.settingId }),
      settingController.deleteSetting,
    );
  }
}

export const settingRoutes = new SettingRoutes();
