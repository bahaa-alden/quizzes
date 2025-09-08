import { z, type TypeOf } from 'zod';
declare const settingIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type ISettingIdSchema = TypeOf<typeof settingIdSchema>;
declare const settingAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    fields: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    search?: string | undefined;
    fields?: string | undefined;
}, {
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    fields?: string | undefined;
}>;
export type ISettingAllSchema = TypeOf<typeof settingAllSchema>;
declare const settingCreateSchema: z.ZodObject<{
    numberOfAttempts: z.ZodNumber;
    duration: z.ZodNumber;
}, "strict", z.ZodTypeAny, {
    numberOfAttempts: number;
    duration: number;
}, {
    numberOfAttempts: number;
    duration: number;
}>;
export type ISettingCreateSchema = TypeOf<typeof settingCreateSchema>;
declare const settingUpdateSchema: z.ZodObject<{
    numberOfAttempts: z.ZodOptional<z.ZodNumber>;
    duration: z.ZodOptional<z.ZodNumber>;
}, "strict", z.ZodTypeAny, {
    numberOfAttempts?: number | undefined;
    duration?: number | undefined;
}, {
    numberOfAttempts?: number | undefined;
    duration?: number | undefined;
}>;
export type ISettingUpdateSchema = TypeOf<typeof settingUpdateSchema>;
declare const _default: {
    settingId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    settingAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        fields: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        search?: string | undefined;
        fields?: string | undefined;
    }, {
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        fields?: string | undefined;
    }>;
    settingCreate: z.ZodObject<{
        numberOfAttempts: z.ZodNumber;
        duration: z.ZodNumber;
    }, "strict", z.ZodTypeAny, {
        numberOfAttempts: number;
        duration: number;
    }, {
        numberOfAttempts: number;
        duration: number;
    }>;
    settingUpdate: z.ZodObject<{
        numberOfAttempts: z.ZodOptional<z.ZodNumber>;
        duration: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        numberOfAttempts?: number | undefined;
        duration?: number | undefined;
    }, {
        numberOfAttempts?: number | undefined;
        duration?: number | undefined;
    }>;
};
export default _default;
