import { Router } from 'express';
import validator from '../middlewares/validator';
import sessionSchema from '../schemas/session.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { sessionController } from '../controllers/session.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';
const { USER, ADMIN, TEACHER } = RoleCode;

export class SessionRoutes {
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

    // GET ALL SESSIONS
    this.router.get(
      '/',
      restrict(USER, ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ query: sessionSchema.sessionAll }),
      sessionController.getSessions,
    );

    // GET ALL SESSIONS
    this.router.get(
      '/records',
      restrict(USER),
      authorizationMiddleware.authorization,
      validator({ query: sessionSchema.sessionRecord }),
      sessionController.getRecords,
    );

    // GET SESSION BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ params: sessionSchema.sessionId }),
      sessionController.getSession,
    );

    // CREATE SESSION
    this.router.post(
      '/',
      restrict(USER),
      authorizationMiddleware.authorization,
      validator({ body: sessionSchema.sessionCreate }),
      sessionController.createSession,
    );

    // UPDATE SESSION BY ID
    this.router.patch(
      '/:id',
      restrict(USER, TEACHER, ADMIN),
      authorizationMiddleware.authorization,
      validator({
        params: sessionSchema.sessionId,
        body: sessionSchema.sessionUpdate,
      }),
      sessionController.updateSession,
    );

    // DELETE SESSION BY ID
    this.router.delete(
      '/:id',
      restrict(TEACHER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: sessionSchema.sessionId }),
      sessionController.deleteSession,
    );
  }
}

export const sessionRoutes = new SessionRoutes();
