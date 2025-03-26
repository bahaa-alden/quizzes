import { Router } from 'express';
import validator from '../middlewares/validator';
import quizQuestionSchema from '../schemas/quiz-question.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { quizQuestionController } from '../controllers/quiz-question.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';
const { USER, ADMIN, TEACHER } = RoleCode;

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

    // GET ALL QUIZ_QUESTIONS
    this.router.get(
      '/',
      restrict(USER, ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ query: quizQuestionSchema.quizQuestionAll }),
      quizQuestionController.getQuizQuestions,
    );

    // GET QUIZ_QUESTION BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ params: quizQuestionSchema.quizQuestionId }),
      quizQuestionController.getQuizQuestion,
    );

    // CREATE QUIZ_QUESTION
    this.router.post(
      '/',
      restrict(ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ body: quizQuestionSchema.quizQuestionCreate }),
      quizQuestionController.createQuizQuestion,
    );

    // UPDATE QUIZ_QUESTION BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({
        params: quizQuestionSchema.quizQuestionId,
        body: quizQuestionSchema.quizQuestionUpdate,
      }),
      quizQuestionController.updateQuizQuestion,
    );

    // DELETE QUIZ_QUESTION BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN, TEACHER),
      authorizationMiddleware.authorization,
      validator({ params: quizQuestionSchema.quizQuestionId }),
      quizQuestionController.deleteQuizQuestion,
    );
  }
}

export const quizQuestionRoutes = new QuizQuestionRoutes();
