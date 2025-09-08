import { QuestionSessionStatus } from './../utils/enum';
import { z, type TypeOf } from 'zod';
declare const questionSessionIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type IQuestionSessionIdSchema = TypeOf<typeof questionSessionIdSchema>;
declare const questionSessionAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    sessionId: z.ZodOptional<z.ZodString>;
    bookmarked: z.ZodOptional<z.ZodEffects<z.ZodNativeEnum<typeof import("./../utils/enum").BooleanString>, boolean, import("./../utils/enum").BooleanString>>;
    fields: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof QuestionSessionStatus>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    status?: QuestionSessionStatus | undefined;
    search?: string | undefined;
    fields?: string | undefined;
    sessionId?: string | undefined;
    bookmarked?: boolean | undefined;
}, {
    status?: QuestionSessionStatus | undefined;
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    fields?: string | undefined;
    sessionId?: string | undefined;
    bookmarked?: import("./../utils/enum").BooleanString | undefined;
}>;
export type IQuestionSessionAllSchema = TypeOf<typeof questionSessionAllSchema>;
declare const questionSessionCreateSchema: z.ZodObject<{
    sessionId: z.ZodString;
    questionId: z.ZodString;
    time: z.ZodOptional<z.ZodNumber>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof QuestionSessionStatus>>;
    bookmarked: z.ZodOptional<z.ZodBoolean>;
    answer: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    sessionId: string;
    questionId: string;
    status?: QuestionSessionStatus | undefined;
    bookmarked?: boolean | undefined;
    time?: number | undefined;
    answer?: number | undefined;
}, {
    sessionId: string;
    questionId: string;
    status?: QuestionSessionStatus | undefined;
    bookmarked?: boolean | undefined;
    time?: number | undefined;
    answer?: number | undefined;
}>;
export type IQuestionSessionCreateSchema = TypeOf<typeof questionSessionCreateSchema>;
declare const questionSessionUpdateSchema: z.ZodObject<{
    sessionId: z.ZodOptional<z.ZodString>;
    questionId: z.ZodOptional<z.ZodString>;
    time: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof QuestionSessionStatus>>;
    bookmarked: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    answer: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
}, "strict", z.ZodTypeAny, {
    status?: QuestionSessionStatus | undefined;
    sessionId?: string | undefined;
    bookmarked?: boolean | undefined;
    questionId?: string | undefined;
    time?: number | undefined;
    answer?: number | undefined;
}, {
    status?: QuestionSessionStatus | undefined;
    sessionId?: string | undefined;
    bookmarked?: boolean | undefined;
    questionId?: string | undefined;
    time?: number | undefined;
    answer?: number | undefined;
}>;
export type IQuestionSessionUpdateSchema = TypeOf<typeof questionSessionUpdateSchema>;
declare const _default: {
    questionSessionId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    questionSessionAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        sessionId: z.ZodOptional<z.ZodString>;
        bookmarked: z.ZodOptional<z.ZodEffects<z.ZodNativeEnum<typeof import("./../utils/enum").BooleanString>, boolean, import("./../utils/enum").BooleanString>>;
        fields: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodNativeEnum<typeof QuestionSessionStatus>>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        status?: QuestionSessionStatus | undefined;
        search?: string | undefined;
        fields?: string | undefined;
        sessionId?: string | undefined;
        bookmarked?: boolean | undefined;
    }, {
        status?: QuestionSessionStatus | undefined;
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        fields?: string | undefined;
        sessionId?: string | undefined;
        bookmarked?: import("./../utils/enum").BooleanString | undefined;
    }>;
    questionSessionCreate: z.ZodObject<{
        sessionId: z.ZodString;
        questionId: z.ZodString;
        time: z.ZodOptional<z.ZodNumber>;
        status: z.ZodOptional<z.ZodNativeEnum<typeof QuestionSessionStatus>>;
        bookmarked: z.ZodOptional<z.ZodBoolean>;
        answer: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        sessionId: string;
        questionId: string;
        status?: QuestionSessionStatus | undefined;
        bookmarked?: boolean | undefined;
        time?: number | undefined;
        answer?: number | undefined;
    }, {
        sessionId: string;
        questionId: string;
        status?: QuestionSessionStatus | undefined;
        bookmarked?: boolean | undefined;
        time?: number | undefined;
        answer?: number | undefined;
    }>;
    questionSessionUpdate: z.ZodObject<{
        sessionId: z.ZodOptional<z.ZodString>;
        questionId: z.ZodOptional<z.ZodString>;
        time: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        status: z.ZodOptional<z.ZodNativeEnum<typeof QuestionSessionStatus>>;
        bookmarked: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        answer: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    }, "strict", z.ZodTypeAny, {
        status?: QuestionSessionStatus | undefined;
        sessionId?: string | undefined;
        bookmarked?: boolean | undefined;
        questionId?: string | undefined;
        time?: number | undefined;
        answer?: number | undefined;
    }, {
        status?: QuestionSessionStatus | undefined;
        sessionId?: string | undefined;
        bookmarked?: boolean | undefined;
        questionId?: string | undefined;
        time?: number | undefined;
        answer?: number | undefined;
    }>;
};
export default _default;
