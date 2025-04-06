/**
 * @swagger
 * tags:
 *   name: sessions
 *   description: Session management and retrieval
 */
export interface Result {
    quizId: string;
    quiz: object;
    questionInSession: number;
    question: number;
    status: string;
}
export declare const Record: {
    type: string;
    properties: {
        id: {
            type: string;
        };
        sessionId: {
            type: string;
        };
        quizId: {
            type: string;
        };
        quiz: {
            type: string;
            properties: {
                id: {
                    type: string;
                };
                teacherId: {
                    type: string;
                };
                subjectId: {
                    type: string;
                };
                status: {
                    type: string;
                    enum: string[];
                };
                name: {
                    type: string;
                };
            };
            example: {
                id: string;
                teacherId: string;
                subjectId: string;
                status: string;
                name: string;
                createdAt: string;
                updatedAt: string;
            };
        };
        sessionQuestions: {
            type: string;
        };
        questions: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
    };
    example: {
        sessionId: string;
        quizId: string;
        quiz: {
            duration: number;
            numberOfAttempts: number;
            status: string;
            name: string;
            createdAt: string;
            updatedAt: string;
            questionIds: string[];
            id: string;
        };
        sessionQuestions: number;
        questions: number;
        status: string;
    };
};
export declare const Session: {
    type: string;
    properties: {
        id: {
            type: string;
        };
        quizId: {
            type: string;
        };
        studentId: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
    };
    example: {
        id: string;
        quizId: string;
        studentId: string;
        status: string;
        createdAt: string;
        updatedAt: string;
    };
};
export declare const createSession: {
    type: string;
    properties: {
        quizId: {
            type: string;
        };
        studentId: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
    };
    example: {
        quizId: string;
        studentId: string;
        status: string;
    };
    required: string[];
};
export declare const updateSession: {
    type: string;
    properties: {
        quizId: {
            type: string;
        };
        studentId: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
    };
    example: {
        quizId: string;
        studentId: string;
        status: string;
    };
};
