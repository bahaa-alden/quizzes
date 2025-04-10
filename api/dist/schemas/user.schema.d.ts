import { RoleCode, UserStatus } from './../utils/enum';
import { z, TypeOf } from 'zod';
declare const userIdSchema: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type IUserIdSchema = TypeOf<typeof userIdSchema>;
declare const userUpdateSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodNativeEnum<typeof UserStatus>>;
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodNativeEnum<typeof RoleCode>>;
}, "strict", z.ZodTypeAny, {
    status?: UserStatus | undefined;
    name?: string | undefined;
    email?: string | undefined;
    role?: RoleCode | undefined;
}, {
    status?: UserStatus | undefined;
    name?: string | undefined;
    email?: string | undefined;
    role?: RoleCode | undefined;
}>;
export type IUserUpdateSchema = TypeOf<typeof userUpdateSchema>;
declare const userUpdateMeSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
}>;
export type IUserUpdateMeSchema = TypeOf<typeof userUpdateMeSchema>;
declare const createUserSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    role: z.ZodOptional<z.ZodNativeEnum<typeof RoleCode>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    role?: RoleCode | undefined;
}, {
    name: string;
    email: string;
    password: string;
    role?: RoleCode | undefined;
}>;
export type ICreateUserSchema = TypeOf<typeof createUserSchema>;
declare const userAllSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
    orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
    orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
    search: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodNativeEnum<typeof RoleCode>>;
    dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    orderColumn: "id" | "createdAt";
    orderDirection: import("../utils/order").OrderDirection;
    search?: string | undefined;
    role?: RoleCode | undefined;
    dateFrom?: Date | undefined;
    dateTo?: Date | undefined;
}, {
    search?: string | undefined;
    page?: string | undefined;
    pageSize?: string | undefined;
    orderColumn?: "id" | "createdAt" | undefined;
    orderDirection?: import("../utils/order").OrderDirection | undefined;
    role?: RoleCode | undefined;
    dateFrom?: string | undefined;
    dateTo?: string | undefined;
}>;
export type IUserAllSchema = TypeOf<typeof userAllSchema>;
declare const _default: {
    userId: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    updateUser: z.ZodObject<{
        status: z.ZodOptional<z.ZodNativeEnum<typeof UserStatus>>;
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodNativeEnum<typeof RoleCode>>;
    }, "strict", z.ZodTypeAny, {
        status?: UserStatus | undefined;
        name?: string | undefined;
        email?: string | undefined;
        role?: RoleCode | undefined;
    }, {
        status?: UserStatus | undefined;
        name?: string | undefined;
        email?: string | undefined;
        role?: RoleCode | undefined;
    }>;
    updateMeSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        name?: string | undefined;
        email?: string | undefined;
    }, {
        name?: string | undefined;
        email?: string | undefined;
    }>;
    userAll: z.ZodObject<{
        page: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        pageSize: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>, number, string | undefined>;
        orderColumn: z.ZodDefault<z.ZodOptional<z.ZodEnum<["id", "createdAt"]>>>;
        orderDirection: z.ZodDefault<z.ZodOptional<z.ZodNativeEnum<typeof import("../utils/order").OrderDirection>>>;
        search: z.ZodOptional<z.ZodString>;
        role: z.ZodOptional<z.ZodNativeEnum<typeof RoleCode>>;
        dateFrom: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
        dateTo: z.ZodOptional<z.ZodEffects<z.ZodString, Date, string>>;
    }, "strip", z.ZodTypeAny, {
        page: number;
        pageSize: number;
        orderColumn: "id" | "createdAt";
        orderDirection: import("../utils/order").OrderDirection;
        search?: string | undefined;
        role?: RoleCode | undefined;
        dateFrom?: Date | undefined;
        dateTo?: Date | undefined;
    }, {
        search?: string | undefined;
        page?: string | undefined;
        pageSize?: string | undefined;
        orderColumn?: "id" | "createdAt" | undefined;
        orderDirection?: import("../utils/order").OrderDirection | undefined;
        role?: RoleCode | undefined;
        dateFrom?: string | undefined;
        dateTo?: string | undefined;
    }>;
    createUser: z.ZodObject<{
        name: z.ZodString;
        email: z.ZodString;
        password: z.ZodString;
        role: z.ZodOptional<z.ZodNativeEnum<typeof RoleCode>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        email: string;
        password: string;
        role?: RoleCode | undefined;
    }, {
        name: string;
        email: string;
        password: string;
        role?: RoleCode | undefined;
    }>;
};
export default _default;
