import { QuizStatus } from './../utils/enum';
import { z, type TypeOf } from 'zod';
declare const quizIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type IQuizIdSchema = TypeOf<typeof quizIdSchema>;
declare const quizAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof QuizStatus>>;
    fields: z.ZodOptional<z.ZodString>;
    dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    status?: QuizStatus | undefined;
    search?: string | undefined;
    fields?: string | undefined;
    dateFrom?: Date | undefined;
    dateTo?: Date | undefined;
}, {
    status?: QuizStatus | undefined;
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    fields?: string | undefined;
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
}>;
export type IQuizAllSchema = TypeOf<typeof quizAllSchema>;
declare const quizCreateSchema: z.ZodObject<{
    duration: z.ZodNumber;
    numberOfAttempts: z.ZodNumber;
    status: z.ZodOptional<z.ZodNativeEnum<typeof QuizStatus>>;
    name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    duration: number;
    numberOfAttempts: number;
    status?: QuizStatus | undefined;
}, {
    name: string;
    duration: number;
    numberOfAttempts: number;
    status?: QuizStatus | undefined;
}>;
export type IQuizCreateSchema = TypeOf<typeof quizCreateSchema>;
declare const quizUpdateSchema: z.ZodObject<{
    duration: z.ZodOptional<z.ZodNumber>;
    numberOfAttempts: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof QuizStatus>>;
    name: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    status?: QuizStatus | undefined;
    name?: string | undefined;
    duration?: number | undefined;
    numberOfAttempts?: number | undefined;
}, {
    status?: QuizStatus | undefined;
    name?: string | undefined;
    duration?: number | undefined;
    numberOfAttempts?: number | undefined;
}>;
export type IQuizUpdateSchema = TypeOf<typeof quizUpdateSchema>;
declare const addQuestionsSchema: z.ZodObject<{
    questions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        answers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            isCorrect: z.ZodOptional<z.ZodBoolean>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            isCorrect?: boolean | undefined;
        }, {
            text: string;
            isCorrect?: boolean | undefined;
        }>, "many">>;
        text: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        text: string;
        answers?: {
            text: string;
            isCorrect?: boolean | undefined;
        }[] | undefined;
    }, {
        text: string;
        answers?: {
            text: string;
            isCorrect?: boolean | undefined;
        }[] | undefined;
    }>, "many">>;
    questionIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    questionIds?: string[] | undefined;
    questions?: {
        text: string;
        answers?: {
            text: string;
            isCorrect?: boolean | undefined;
        }[] | undefined;
    }[] | undefined;
}, {
    questionIds?: string[] | undefined;
    questions?: {
        text: string;
        answers?: {
            text: string;
            isCorrect?: boolean | undefined;
        }[] | undefined;
    }[] | undefined;
}>;
export type IAddQuestionsSchema = TypeOf<typeof addQuestionsSchema>;
declare const _default: {
    addQuestions: z.ZodObject<{
        questions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            answers: z.ZodOptional<z.ZodArray<z.ZodObject<{
                isCorrect: z.ZodOptional<z.ZodBoolean>;
                text: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                text: string;
                isCorrect?: boolean | undefined;
            }, {
                text: string;
                isCorrect?: boolean | undefined;
            }>, "many">>;
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
            answers?: {
                text: string;
                isCorrect?: boolean | undefined;
            }[] | undefined;
        }, {
            text: string;
            answers?: {
                text: string;
                isCorrect?: boolean | undefined;
            }[] | undefined;
        }>, "many">>;
        questionIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        questionIds?: string[] | undefined;
        questions?: {
            text: string;
            answers?: {
                text: string;
                isCorrect?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
    }, {
        questionIds?: string[] | undefined;
        questions?: {
            text: string;
            answers?: {
                text: string;
                isCorrect?: boolean | undefined;
            }[] | undefined;
        }[] | undefined;
    }>;
    quizId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    quizAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodNativeEnum<typeof QuizStatus>>;
        fields: z.ZodOptional<z.ZodString>;
        dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
        dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        status?: QuizStatus | undefined;
        search?: string | undefined;
        fields?: string | undefined;
        dateFrom?: Date | undefined;
        dateTo?: Date | undefined;
    }, {
        status?: QuizStatus | undefined;
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        fields?: string | undefined;
        dateFrom?: string | undefined;
        dateTo?: string | undefined;
    }>;
    quizCreate: z.ZodObject<{
        duration: z.ZodNumber;
        numberOfAttempts: z.ZodNumber;
        status: z.ZodOptional<z.ZodNativeEnum<typeof QuizStatus>>;
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        duration: number;
        numberOfAttempts: number;
        status?: QuizStatus | undefined;
    }, {
        name: string;
        duration: number;
        numberOfAttempts: number;
        status?: QuizStatus | undefined;
    }>;
    quizUpdate: z.ZodObject<{
        duration: z.ZodOptional<z.ZodNumber>;
        numberOfAttempts: z.ZodOptional<z.ZodNumber>;
        status: z.ZodOptional<z.ZodNativeEnum<typeof QuizStatus>>;
        name: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        status?: QuizStatus | undefined;
        name?: string | undefined;
        duration?: number | undefined;
        numberOfAttempts?: number | undefined;
    }, {
        status?: QuizStatus | undefined;
        name?: string | undefined;
        duration?: number | undefined;
        numberOfAttempts?: number | undefined;
    }>;
};
export default _default;
