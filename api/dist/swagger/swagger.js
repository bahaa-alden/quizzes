"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerJsdoc = require("swagger-jsdoc");
const subject_swagger_1 = require("./routes/subject.swagger");
const setting_swagger_1 = require("./routes/setting.swagger");
const question_session_swagger_1 = require("./routes/question-session.swagger");
const session_swagger_1 = require("./routes/session.swagger");
const quiz_question_swagger_1 = require("./routes/quiz-question.swagger");
const question_swagger_1 = require("./routes/question.swagger");
const quiz_swagger_1 = require("./routes/quiz.swagger");
const auth_swagger_1 = require("./routes/auth.swagger");
const config_1 = require("../config");
const components_1 = require("./components");
const user_swagger_1 = require("./routes/user.swagger");
const options = {
    url: '',
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'REST API Docs',
            version: '1.0.0',
            description: 'This is an API store application made with Express and documented with Swagger',
        },
        servers: [
            {
                url: `${config_1.env_vars.env === 'development'
                    ? `http://localhost:${config_1.env_vars.port}`
                    : config_1.env_vars.apiUrl}/api/v1`,
                description: 'Development server',
            },
        ],
        components: {
            schemas: {
                Subject: subject_swagger_1.Subject,
                createSubject: subject_swagger_1.createSubject,
                updateSubject: subject_swagger_1.updateSubject,
                Setting: setting_swagger_1.Setting,
                createSetting: setting_swagger_1.createSetting,
                updateSetting: setting_swagger_1.updateSetting,
                Record: session_swagger_1.Record,
                addQuestions: quiz_swagger_1.addQuestions,
                QuestionSession: question_session_swagger_1.QuestionSession,
                createQuestionSession: question_session_swagger_1.createQuestionSession,
                updateQuestionSession: question_session_swagger_1.updateQuestionSession,
                Session: session_swagger_1.Session,
                createSession: session_swagger_1.createSession,
                updateSession: session_swagger_1.updateSession,
                QuizQuestion: quiz_question_swagger_1.QuizQuestion,
                createQuizQuestion: quiz_question_swagger_1.createQuizQuestion,
                updateQuizQuestion: quiz_question_swagger_1.updateQuizQuestion,
                Question: question_swagger_1.Question,
                createQuestion: question_swagger_1.createQuestion,
                updateQuestion: question_swagger_1.updateQuestion,
                Quiz: quiz_swagger_1.Quiz,
                createQuiz: quiz_swagger_1.createQuiz,
                updateQuiz: quiz_swagger_1.updateQuiz,
                signUp: auth_swagger_1.signUp,
                createUser: user_swagger_1.createUser,
                updateMe: user_swagger_1.updateMe,
                updateUser: user_swagger_1.updateUser,
                User: user_swagger_1.User,
                Error: components_1.Error,
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
                DuplicateEmail: components_1.DuplicateEmail,
                Forbidden: components_1.Forbidden,
                NotFound: components_1.NotFound,
                Unauthorized: components_1.Unauthorized,
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
    apis: [__dirname + '/routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(options);
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map