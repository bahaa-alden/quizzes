import { z, type TypeOf } from 'zod';
declare const subjectIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type ISubjectIdSchema = TypeOf<typeof subjectIdSchema>;
declare const subjectAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    teacherId: z.ZodOptional<z.ZodString>;
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    search?: string | undefined;
    fields?: string | undefined;
    teacherId?: string | undefined;
}, {
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    fields?: string | undefined;
    teacherId?: string | undefined;
}>;
export type ISubjectAllSchema = TypeOf<typeof subjectAllSchema>;
declare const subjectCreateSchema: z.ZodObject<{
    teacherId: z.ZodString;
    isActive: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodString;
}, "strict", z.ZodTypeAny, {
    name: string;
    teacherId: string;
    isActive?: boolean | undefined;
}, {
    name: string;
    teacherId: string;
    isActive?: boolean | undefined;
}>;
export type ISubjectCreateSchema = TypeOf<typeof subjectCreateSchema>;
declare const subjectUpdateSchema: z.ZodObject<{
    teacherId: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    name: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    teacherId?: string | undefined;
    isActive?: boolean | undefined;
}, {
    name?: string | undefined;
    teacherId?: string | undefined;
    isActive?: boolean | undefined;
}>;
export type ISubjectUpdateSchema = TypeOf<typeof subjectUpdateSchema>;
declare const _default: {
    subjectId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    subjectAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        teacherId: z.ZodOptional<z.ZodString>;
        fields: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        search?: string | undefined;
        fields?: string | undefined;
        teacherId?: string | undefined;
    }, {
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        fields?: string | undefined;
        teacherId?: string | undefined;
    }>;
    subjectCreate: z.ZodObject<{
        teacherId: z.ZodString;
        isActive: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        name: string;
        teacherId: string;
        isActive?: boolean | undefined;
    }, {
        name: string;
        teacherId: string;
        isActive?: boolean | undefined;
    }>;
    subjectUpdate: z.ZodObject<{
        teacherId: z.ZodOptional<z.ZodString>;
        isActive: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        name?: string | undefined;
        teacherId?: string | undefined;
        isActive?: boolean | undefined;
    }, {
        name?: string | undefined;
        teacherId?: string | undefined;
        isActive?: boolean | undefined;
    }>;
};
export default _default;
