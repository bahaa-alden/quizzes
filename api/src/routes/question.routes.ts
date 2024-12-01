import { Router } from 'express';
import validator from '../middlewares/validator';
import questionSchema from '../schemas/question.schema';
import restrict from '../middlewares/restrict';
import { RoleCode } from '../utils/enum';
import { authorizationMiddleware } from '../middlewares/authorization';
import { questionController } from '../controllers/question.controller';
import authSchema from '../schemas/auth.schema';
import { authMiddleware } from '../middlewares/authJwt';
const { USER, ADMIN } = RoleCode;

export class QuestionRoutes {
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

    // GET ALL QUESTIONS
    this.router.get(
      '/',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ query: questionSchema.questionAll }),
      questionController.getQuestions,
    );

    // GET QUESTION BY ID
    this.router.get(
      '/:id',
      restrict(USER, ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: questionSchema.questionId }),
      questionController.getQuestion,
    );

    // CREATE QUESTION
    this.router.post(
      '/',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ body: questionSchema.questionCreate }),
      questionController.createQuestion,
    );

    // UPDATE QUESTION BY ID
    this.router.patch(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({
        params: questionSchema.questionId,
        body: questionSchema.questionUpdate,
      }),
      questionController.updateQuestion,
    );

    // DELETE QUESTION BY ID
    this.router.delete(
      '/:id',
      restrict(ADMIN),
      authorizationMiddleware.authorization,
      validator({ params: questionSchema.questionId }),
      questionController.deleteQuestion,
    );
  }
}

export const questionRoutes = new QuestionRoutes();
