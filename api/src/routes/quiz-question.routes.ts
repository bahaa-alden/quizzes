import { Router } from 'express';
import validator from '../middlewares/validator';
import quizQuestionSchema from '../schemas/quiz-question.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../auth/authorization';
import { quizQuestionController } from '../controllers/quiz-question.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';
import { authController } from '../controllers/auth.controller';
const { USER, ADMIN } = RoleCode;

export class QuizQuestionRoutes {
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

    // GET ALL QUIZQUESTIONS
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: quizQuestionSchema.quizQuestionAll }),
      quizQuestionController.getQuizQuestions,
    );

    // GET QUIZQUESTION BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: quizQuestionSchema.quizQuestionId }),
      quizQuestionController.getQuizQuestion,
    );

    // CREATE QUIZQUESTION
    this.router.post(
      '/',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: quizQuestionSchema.quizQuestionCreate }),
      quizQuestionController.createQuizQuestion,
    );

    // UPDATE QUIZQUESTION BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({
        params: quizQuestionSchema.quizQuestionId,
        body: quizQuestionSchema.quizQuestionUpdate,
      }),
      quizQuestionController.updateQuizQuestion,
    );

    // DELETE QUIZQUESTION BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: quizQuestionSchema.quizQuestionId }),
      quizQuestionController.deleteQuizQuestion,
    );
  }
}

export const quizQuestionRoutes = new QuizQuestionRoutes();
