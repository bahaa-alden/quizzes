import { SessionStatus } from './../utils/enum';
import { z, type TypeOf } from 'zod';
declare const sessionIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type ISessionIdSchema = TypeOf<typeof sessionIdSchema>;
declare const sessionAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof SessionStatus>>;
    studentId: z.ZodOptional<z.ZodString>;
    quizId: z.ZodOptional<z.ZodString>;
    dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    status?: SessionStatus | undefined;
    search?: string | undefined;
    fields?: string | undefined;
    dateFrom?: Date | undefined;
    dateTo?: Date | undefined;
    quizId?: string | undefined;
    studentId?: string | undefined;
}, {
    status?: SessionStatus | undefined;
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    fields?: string | undefined;
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
    quizId?: string | undefined;
    studentId?: string | undefined;
}>;
export type ISessionAllSchema = TypeOf<typeof sessionAllSchema>;
declare const sessionRecordSchema: z.ZodObject<{
    dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
}, "strip", z.ZodTypeAny, {
    dateFrom?: Date | undefined;
    dateTo?: Date | undefined;
}, {
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
}>;
export type ISessionRecordSchema = TypeOf<typeof sessionRecordSchema>;
declare const sessionCreateSchema: z.ZodObject<{
    score: z.ZodOptional<z.ZodNumber>;
    quizId: z.ZodString;
    studentId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof SessionStatus>>;
}, "strict", z.ZodTypeAny, {
    quizId: string;
    status?: SessionStatus | undefined;
    score?: number | undefined;
    studentId?: string | undefined;
}, {
    quizId: string;
    status?: SessionStatus | undefined;
    score?: number | undefined;
    studentId?: string | undefined;
}>;
export type ISessionCreateSchema = TypeOf<typeof sessionCreateSchema>;
declare const sessionUpdateSchema: z.ZodObject<{
    score: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
    quizId: z.ZodOptional<z.ZodString>;
    studentId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodNativeEnum<typeof SessionStatus>>;
}, "strict", z.ZodTypeAny, {
    status?: SessionStatus | undefined;
    quizId?: string | undefined;
    score?: number | undefined;
    studentId?: string | undefined;
}, {
    status?: SessionStatus | undefined;
    quizId?: string | undefined;
    score?: number | undefined;
    studentId?: string | undefined;
}>;
export type ISessionUpdateSchema = TypeOf<typeof sessionUpdateSchema>;
declare const _default: {
    sessionId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    sessionAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodNativeEnum<typeof SessionStatus>>;
        studentId: z.ZodOptional<z.ZodString>;
        quizId: z.ZodOptional<z.ZodString>;
        dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
        dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
        fields: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        status?: SessionStatus | undefined;
        search?: string | undefined;
        fields?: string | undefined;
        dateFrom?: Date | undefined;
        dateTo?: Date | undefined;
        quizId?: string | undefined;
        studentId?: string | undefined;
    }, {
        status?: SessionStatus | undefined;
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        fields?: string | undefined;
        dateFrom?: string | undefined;
        dateTo?: string | undefined;
        quizId?: string | undefined;
        studentId?: string | undefined;
    }>;
    sessionCreate: z.ZodObject<{
        score: z.ZodOptional<z.ZodNumber>;
        quizId: z.ZodString;
        studentId: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodNativeEnum<typeof SessionStatus>>;
    }, "strict", z.ZodTypeAny, {
        quizId: string;
        status?: SessionStatus | undefined;
        score?: number | undefined;
        studentId?: string | undefined;
    }, {
        quizId: string;
        status?: SessionStatus | undefined;
        score?: number | undefined;
        studentId?: string | undefined;
    }>;
    sessionUpdate: z.ZodObject<{
        score: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        quizId: z.ZodOptional<z.ZodString>;
        studentId: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodNativeEnum<typeof SessionStatus>>;
    }, "strict", z.ZodTypeAny, {
        status?: SessionStatus | undefined;
        quizId?: string | undefined;
        score?: number | undefined;
        studentId?: string | undefined;
    }, {
        status?: SessionStatus | undefined;
        quizId?: string | undefined;
        score?: number | undefined;
        studentId?: string | undefined;
    }>;
    sessionRecord: z.ZodObject<{
        dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
        dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    }, "strip", z.ZodTypeAny, {
        dateFrom?: Date | undefined;
        dateTo?: Date | undefined;
    }, {
        dateFrom?: string | undefined;
        dateTo?: string | undefined;
    }>;
};
export default _default;
