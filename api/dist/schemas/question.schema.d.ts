import { z, type TypeOf } from 'zod';
declare const answersCreateSchema: z.ZodObject<{
    isCorrect: z.ZodOptional<z.ZodBoolean>;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    isCorrect?: boolean | undefined;
}, {
    text: string;
    isCorrect?: boolean | undefined;
}>;
export type IAnswersCreateSchema = TypeOf<typeof answersCreateSchema>;
declare const answersUpdateSchema: z.ZodObject<{
    isCorrect: z.ZodOptional<z.ZodBoolean>;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    isCorrect?: boolean | undefined;
}, {
    text: string;
    isCorrect?: boolean | undefined;
}>;
export type IAnswersUpdateSchema = TypeOf<typeof answersUpdateSchema>;
declare const questionIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type IQuestionIdSchema = TypeOf<typeof questionIdSchema>;
declare const questionAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    subjectId: z.ZodOptional<z.ZodString>;
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    search?: string | undefined;
    fields?: string | undefined;
    subjectId?: string | undefined;
}, {
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    fields?: string | undefined;
    subjectId?: string | undefined;
}>;
export type IQuestionAllSchema = TypeOf<typeof questionAllSchema>;
declare const questionCreateSchema: z.ZodObject<{
    subjectId: z.ZodString;
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
    subjectId: string;
    answers?: {
        text: string;
        isCorrect?: boolean | undefined;
    }[] | undefined;
}, {
    text: string;
    subjectId: string;
    answers?: {
        text: string;
        isCorrect?: boolean | undefined;
    }[] | undefined;
}>;
export type IQuestionCreateSchema = TypeOf<typeof questionCreateSchema>;
declare const questionUpdateSchema: z.ZodObject<{
    subjectId: z.ZodOptional<z.ZodString>;
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
    text: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    text?: string | undefined;
    subjectId?: string | undefined;
    answers?: {
        text: string;
        isCorrect?: boolean | undefined;
    }[] | undefined;
}, {
    text?: string | undefined;
    subjectId?: string | undefined;
    answers?: {
        text: string;
        isCorrect?: boolean | undefined;
    }[] | undefined;
}>;
export type IQuestionUpdateSchema = TypeOf<typeof questionUpdateSchema>;
declare const _default: {
    questionId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    questionAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        subjectId: z.ZodOptional<z.ZodString>;
        fields: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        search?: string | undefined;
        fields?: string | undefined;
        subjectId?: string | undefined;
    }, {
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        fields?: string | undefined;
        subjectId?: string | undefined;
    }>;
    questionCreate: z.ZodObject<{
        subjectId: z.ZodString;
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
        subjectId: string;
        answers?: {
            text: string;
            isCorrect?: boolean | undefined;
        }[] | undefined;
    }, {
        text: string;
        subjectId: string;
        answers?: {
            text: string;
            isCorrect?: boolean | undefined;
        }[] | undefined;
    }>;
    questionUpdate: z.ZodObject<{
        subjectId: z.ZodOptional<z.ZodString>;
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
        text: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        text?: string | undefined;
        subjectId?: string | undefined;
        answers?: {
            text: string;
            isCorrect?: boolean | undefined;
        }[] | undefined;
    }, {
        text?: string | undefined;
        subjectId?: string | undefined;
        answers?: {
            text: string;
            isCorrect?: boolean | undefined;
        }[] | undefined;
    }>;
};
export default _default;
