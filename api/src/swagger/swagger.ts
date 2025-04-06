import * as swaggerJsdoc from 'swagger-jsdoc';
import {
  Subject,
  createSubject,
  updateSubject,
} from './routes/subject.swagger';
import {
  Setting,
  createSetting,
  updateSetting,
} from './routes/setting.swagger';
import {
  QuestionSession,
  createQuestionSession,
  updateQuestionSession,
} from './routes/question-session.swagger';
import {
  Record,
  Session,
  createSession,
  updateSession,
} from './routes/session.swagger';
import {
  QuizQuestion,
  createQuizQuestion,
  updateQuizQuestion,
} from './routes/quiz-question.swagger';
import {
  Question,
  createQuestion,
  updateQuestion,
} from './routes/question.swagger';
import {
  Quiz,
  addQuestions,
  createQuiz,
  updateQuiz,
} from './routes/quiz.swagger';
import { signUp } from './routes/auth.swagger';
import { env_vars } from '../config';
import {
  DuplicateEmail,
  Forbidden,
  NotFound,
  Unauthorized,
  Error,
} from './components';
import { createUser, updateMe, updateUser, User } from './routes/users.swagger';
const options = {
  url: '',
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'REST API Docs',
      version: '1.0.0',
      description:
        'This is an API store application made with Express and documented with Swagger',
    },
    servers: [
      {
        url: `${
          env_vars.env === 'development'
            ? `http://localhost:${env_vars.port}`
            : env_vars.apiUrl
        }/api/v1`,
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        Subject,
        createSubject,
        updateSubject,
        Setting,
        createSetting,
        updateSetting,
        Record,
        addQuestions,
        QuestionSession,
        createQuestionSession,
        updateQuestionSession,
        Session,
        createSession,
        updateSession,
        QuizQuestion,
        createQuizQuestion,
        updateQuizQuestion,
        Question,
        createQuestion,
        updateQuestion,
        Quiz,
        createQuiz,
        updateQuiz,
        signUp,
        createUser,
        updateMe,
        updateUser,
        User,
        Error,
      },
      securitySchemes: {
        Bearer: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Enter the token : abcde12345".',
        },
      },
      responses: {
        DuplicateEmail,
        Forbidden,
        NotFound,
        Unauthorized,
        201: {
          description: 'created',
        },
        200: {
          description: 'ok',
        },
        204: {
          description: 'No content',
        },
        400: {
          description: 'Bad request',
        },
        401: {
          description: 'Unauthorized',
        },
        500: {
          description: 'Internal server error',
        },
      },
    },
  },
  apis: ['./dist/swagger/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);
export default swaggerSpec;
