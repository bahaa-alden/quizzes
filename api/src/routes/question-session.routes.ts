import { Router } from 'express';
import validator from '../middlewares/validator';
import questionSessionSchema from '../schemas/question-session.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { questionSessionController } from '../controllers/question-session.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';
const { USER, ADMIN } = RoleCode;

export class QuestionSessionRoutes {
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

    // GET ALL QUESTIONSESSIONS
    this.router.get(
      '/',
      restrict(USER),
      authorizationMiddleware.authorization,
      validator({ query: questionSessionSchema.questionSessionAll }),
      questionSessionController.getQuestionSessions,
    );

    // GET QUESTIONSESSION BY ID
    this.router.get(
      '/:id',
      restrict(USER),
      authorizationMiddleware.authorization,
      validator({ params: questionSessionSchema.questionSessionId }),
      questionSessionController.getQuestionSession,
    );

    // CREATE QUESTIONSESSION
    this.router.post(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: questionSessionSchema.questionSessionCreate }),
      questionSessionController.createQuestionSession,
    );

    // UPDATE QUESTIONSESSION BY ID
    this.router.patch(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({
        params: questionSessionSchema.questionSessionId,
        body: questionSessionSchema.questionSessionUpdate,
      }),
      questionSessionController.updateQuestionSession,
    );

    // DELETE QUESTIONSESSION BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: questionSessionSchema.questionSessionId }),
      questionSessionController.deleteQuestionSession,
    );
  }
}

export const questionSessionRoutes = new QuestionSessionRoutes();
