import { type TypeOf } from 'zod';
declare const quizQuestionIdSchema: import("zod").ZodObject<{
    id: import("zod").ZodString;
}, "strip", import("zod").ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type IQuizQuestionIdSchema = TypeOf<typeof quizQuestionIdSchema>;
declare const quizQuestionAllSchema: import("zod").ZodObject<{
    page: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, number, string>>>, number, string | undefined>;
    pageSize: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, number, string>>>, number, string | undefined>;
    orderColumn: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<["id", "createdAt"]>>>;
    orderDirection: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: import("zod").ZodOptional<import("zod").ZodString>;
    quizId: import("zod").ZodOptional<import("zod").ZodString>;
    fields: import("zod").ZodOptional<import("zod").ZodString>;
    dateFrom: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, Date, string>>;
    dateTo: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, Date, string>>;
}, "strip", import("zod").ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    search?: string | undefined;
    fields?: string | undefined;
    dateFrom?: Date | undefined;
    dateTo?: Date | undefined;
    quizId?: string | undefined;
}, {
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    fields?: string | undefined;
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
    quizId?: string | undefined;
}>;
export type IQuizQuestionAllSchema = TypeOf<typeof quizQuestionAllSchema>;
declare const quizQuestionCreateSchema: import("zod").ZodObject<{
    questionId: import("zod").ZodString;
    quizId: import("zod").ZodString;
}, "strict", import("zod").ZodTypeAny, {
    questionId: string;
    quizId: string;
}, {
    questionId: string;
    quizId: string;
}>;
export type IQuizQuestionCreateSchema = TypeOf<typeof quizQuestionCreateSchema>;
declare const quizQuestionUpdateSchema: import("zod").ZodObject<{
    questionId: import("zod").ZodOptional<import("zod").ZodString>;
    quizId: import("zod").ZodOptional<import("zod").ZodString>;
}, "strict", import("zod").ZodTypeAny, {
    questionId?: string | undefined;
    quizId?: string | undefined;
}, {
    questionId?: string | undefined;
    quizId?: string | undefined;
}>;
export type IQuizQuestionUpdateSchema = TypeOf<typeof quizQuestionUpdateSchema>;
declare const _default: {
    quizQuestionId: import("zod").ZodObject<{
        id: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    quizQuestionAll: import("zod").ZodObject<{
        page: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, number, string>>>, number, string | undefined>;
        pageSize: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, number, string>>>, number, string | undefined>;
        orderColumn: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodEnum<["id", "createdAt"]>>>;
        orderDirection: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: import("zod").ZodOptional<import("zod").ZodString>;
        quizId: import("zod").ZodOptional<import("zod").ZodString>;
        fields: import("zod").ZodOptional<import("zod").ZodString>;
        dateFrom: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, Date, string>>;
        dateTo: import("zod").ZodOptional<import("zod").ZodEffects<import("zod").ZodString, Date, string>>;
    }, "strip", import("zod").ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        search?: string | undefined;
        fields?: string | undefined;
        dateFrom?: Date | undefined;
        dateTo?: Date | undefined;
        quizId?: string | undefined;
    }, {
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        fields?: string | undefined;
        dateFrom?: string | undefined;
        dateTo?: string | undefined;
        quizId?: string | undefined;
    }>;
    quizQuestionCreate: import("zod").ZodObject<{
        questionId: import("zod").ZodString;
        quizId: import("zod").ZodString;
    }, "strict", import("zod").ZodTypeAny, {
        questionId: string;
        quizId: string;
    }, {
        questionId: string;
        quizId: string;
    }>;
    quizQuestionUpdate: import("zod").ZodObject<{
        questionId: import("zod").ZodOptional<import("zod").ZodString>;
        quizId: import("zod").ZodOptional<import("zod").ZodString>;
    }, "strict", import("zod").ZodTypeAny, {
        questionId?: string | undefined;
        quizId?: string | undefined;
    }, {
        questionId?: string | undefined;
        quizId?: string | undefined;
    }>;
};
export default _default;
