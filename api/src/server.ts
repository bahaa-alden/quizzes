import { statisticsRoutes } from './routes/statistics.routes';
import { subjectRoutes } from './routes/subject.routes';
import { settingRoutes } from './routes/setting.routes';
import { questionSessionRoutes } from './routes/question-session.routes';
import { sessionRoutes } from './routes/session.routes';
import { quizQuestionRoutes } from './routes/quiz-question.routes';
import { questionRoutes } from './routes/question.routes';
import { quizRoutes } from './routes/quiz.routes';
import * as express from 'express';
import * as mongoose from 'mongoose';
import * as compression from 'compression';
import * as cors from 'cors';
import * as swaggerUi from 'swagger-ui-express';
//R <dont remove this line>
import { userRoutes } from './routes/user.routes';
import { env_vars } from './config';
import helmet from 'helmet';
import * as passport from 'passport';
import errHandler from './middlewares/errHandler';
import customResponses from './middlewares/custom.middleware';
import swaggerSpec from './swagger/swagger';
import { NotFoundError } from './core/ApiError';
import { join } from 'path';
class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();

    this.routes();
    this.mongo();
  }

  public routes(): void {
    this.app.use('/api/v1/statics', statisticsRoutes.router);

    this.app.use('/api/v1/subjects', subjectRoutes.router);

    this.app.use('/api/v1/settings', settingRoutes.router);

    this.app.use('/api/v1/question-sessions', questionSessionRoutes.router);

    this.app.use('/api/v1/sessions', sessionRoutes.router);

    this.app.use('/api/v1/quiz-questions', quizQuestionRoutes.router);

    this.app.use('/api/v1/questions', questionRoutes.router);

    this.app.use('/api/v1/quizzes', quizRoutes.router);

    this.app.use('/api/v1/users', userRoutes.router);

    this.app.use(express.static(join(__dirname, '..', 'public')));

    this.app.use(
      '/docs',
      swaggerUi.serve,
      swaggerUi.setup(swaggerSpec, {
        swaggerOptions: { persistAuthorization: true },
      }),
    );

    // Docs in JSON format
    this.app.get(
      '/docs.json',
      (req: express.Request, res: express.Response) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerSpec);
      },
    );
    //ROUTES <dont remove this line>
    this.app.all(
      '*',
      (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction,
      ) => {
        next(
          new NotFoundError(`Can't find ${req.originalUrl} on this server!`),
        );
      },
    );
    this.app.use(errHandler);
  }

  public config(): void {
    this.app.use(customResponses);
    this.app.set('port', env_vars.port || 3000);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(compression());
    this.app.use(
      cors({
        origin: [
          'http://localhost:3000',
          'https://my-app-red-kappa.vercel.app',
        ],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        credentials: true,
      }),
    );
    this.app.use(helmet());
    this.app.use(passport.initialize());
  }

  private mongo() {
    const connection = mongoose.connection;
    connection.on('connected', () => {});
    connection.on('reconnected', () => {});
    connection.on('disconnected', () => {
      setTimeout(() => {
        mongoose.connect(env_vars.mongoose.url);
      }, 3000);
    });

    connection.on('close', () => {});
    connection.on('error', (error: Error) => {});

    const run = async () => {
      await mongoose.connect(env_vars.mongoose.url);
    };
    run().catch((error) => console.error(error));
  }

  public start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.info(
        `API is running at http://localhost:${this.app.get('port')}`,
      );
      console.info(
        `swagger is running at http://localhost:${this.app.get('port')}/docs`,
      );
    });
  }
}

const server = new Server();

server.start();
