import { Router } from 'express';
import validator from '../middlewares/validator';
import subjectSchema from '../schemas/subject.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { subjectController } from '../controllers/subject.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';

const { USER, ADMIN, TEACHER } = RoleCode;

export class SubjectRoutes {
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

    // GET ALL SUBJECTS
    this.router.get(
      '/',
      restrict(USER, ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ query: subjectSchema.subjectAll }),
      subjectController.getSubjects,
    );

    // GET SUBJECT BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ params: subjectSchema.subjectId }),
      subjectController.getSubject,
    );

    // CREATE SUBJECT
    this.router.post(
      '/',
      restrict(ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ body: subjectSchema.subjectCreate }),
      subjectController.createSubject,
    );

    // UPDATE SUBJECT BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({
        params: subjectSchema.subjectId,
        body: subjectSchema.subjectUpdate,
      }),
      subjectController.updateSubject,
    );

    // DELETE SUBJECT BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ params: subjectSchema.subjectId }),
      subjectController.deleteSubject,
    );
  }
}

export const subjectRoutes = new SubjectRoutes();
