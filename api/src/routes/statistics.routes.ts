import { Router } from 'express';
import validator from '../middlewares/validator';
import statisticsSchema from '../schemas/statistics.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { statisticsController } from '../controllers/statistics.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';

const { USER, ADMIN, TEACHER } = RoleCode;

export class StatisticsRoutes {
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

    // GET ALL STATISTICS
    this.router.get(
      '/',
      restrict(ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ query: statisticsSchema.statisticsAll }),
      statisticsController.getStatistics,
    );
  }
}

export const statisticsRoutes = new StatisticsRoutes();
