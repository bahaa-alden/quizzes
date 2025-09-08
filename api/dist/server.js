"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statistics_routes_1 = require("./routes/statistics.routes");
const subject_routes_1 = require("./routes/subject.routes");
const setting_routes_1 = require("./routes/setting.routes");
const question_session_routes_1 = require("./routes/question-session.routes");
const session_routes_1 = require("./routes/session.routes");
const quiz_question_routes_1 = require("./routes/quiz-question.routes");
const question_routes_1 = require("./routes/question.routes");
const quiz_routes_1 = require("./routes/quiz.routes");
const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
//R <dont remove this line>
const user_routes_1 = require("./routes/user.routes");
const config_1 = require("./config");
const helmet_1 = require("helmet");
const passport = require("passport");
const errHandler_1 = require("./middlewares/errHandler");
const custom_middleware_1 = require("./middlewares/custom.middleware");
const swagger_1 = require("./swagger/swagger");
const ApiError_1 = require("./core/ApiError");
const path_1 = require("path");
class Server {
    app;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
        this.mongo();
    }
    routes() {
        this.app.use('/api/v1/statics', statistics_routes_1.statisticsRoutes.router);
        this.app.use('/api/v1/subjects', subject_routes_1.subjectRoutes.router);
        this.app.use('/api/v1/settings', setting_routes_1.settingRoutes.router);
        this.app.use('/api/v1/question-sessions', question_session_routes_1.questionSessionRoutes.router);
        this.app.use('/api/v1/sessions', session_routes_1.sessionRoutes.router);
        this.app.use('/api/v1/quiz-questions', quiz_question_routes_1.quizQuestionRoutes.router);
        this.app.use('/api/v1/questions', question_routes_1.questionRoutes.router);
        this.app.use('/api/v1/quizzes', quiz_routes_1.quizRoutes.router);
        this.app.use('/api/v1/users', user_routes_1.userRoutes.router);
        this.app.use(express.static((0, path_1.join)(__dirname, '..', 'public')));
        this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swagger_1.default, {
            swaggerOptions: { persistAuthorization: true },
        }));
        // Docs in JSON format
        this.app.get('/docs.json', (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.send(swagger_1.default);
        });
        //ROUTES <dont remove this line>
        this.app.all('*', (req, res, next) => {
            next(new ApiError_1.NotFoundError(`Can't find ${req.originalUrl} on this server!`));
        });
        this.app.use(errHandler_1.default);
    }
    config() {
        // CORS first
        this.app.use(cors({
            origin: [
                'http://localhost:3000',
                'https://my-app-red-kappa.vercel.app',
            ],
            methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
            credentials: true,
        }));
        // handle preflight requests
        this.app.options('*', cors());
        // Helmet (with CORS-friendly config)
        this.app.use((0, helmet_1.default)({
            crossOriginResourcePolicy: false,
        }));
        this.app.use(compression());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(passport.initialize());
        this.app.use(custom_middleware_1.default);
        this.app.set('port', config_1.env_vars.port || 3000);
    }
    mongo() {
        const connection = mongoose.connection;
        connection.on('connected', () => { });
        connection.on('reconnected', () => { });
        connection.on('disconnected', () => {
            setTimeout(() => {
                mongoose.connect(config_1.env_vars.mongoose.url);
            }, 3000);
        });
        connection.on('close', () => { });
        connection.on('error', (error) => { });
        const run = async () => {
            await mongoose.connect(config_1.env_vars.mongoose.url);
        };
        run().catch((error) => console.error(error));
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.info(`API is running at http://localhost:${this.app.get('port')}`);
            console.info(`swagger is running at http://localhost:${this.app.get('port')}/docs`);
        });
    }
}
const server = new Server();
server.start();
//# sourceMappingURL=server.js.map