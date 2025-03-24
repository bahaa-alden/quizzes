import { Router } from 'express';
import validator from '../middlewares/validator';
import quizSchema from '../schemas/quiz.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../auth/authorization';
import { quizController } from '../controllers/quiz.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';
const { USER, ADMIN } = RoleCode;

export class QuizRoutes {
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

    // GET ALL QUIZZES
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: quizSchema.quizAll }),
      quizController.getQuizzes,
    );

    // GET QUIZ BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: quizSchema.quizId }),
      quizController.getQuiz,
    );

    // CREATE QUIZ
    this.router.post(
      '/',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: quizSchema.quizCreate }),
      quizController.createQuiz,
    );

    // CREATE QUIZ
    this.router.post(
      '/:id/questions',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: quizSchema.addQuestions }),
      quizController.addQuestions,
    );

    // UPDATE QUIZ BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: quizSchema.quizId, body: quizSchema.quizUpdate }),
      quizController.updateQuiz,
    );

    // DELETE QUIZ BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: quizSchema.quizId }),
      quizController.deleteQuiz,
    );
  }
}

export const quizRoutes = new QuizRoutes();
