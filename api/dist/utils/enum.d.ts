export declare const getKeysOf: <K extends string, V>(obj: { [key in K]: V; }) => K[];
export declare const getValuesOf: <K extends string, V>(obj: { [key in K]: V; }) => V[];
export declare enum UserStatus {
    active = "active",
    disactive = "disactive"
}
export declare enum CarCategory {
    truck = "truck"
}
export declare enum RoleCode {
    USER = "USER",
    ADMIN = "ADMIN",
    TEACHER = "TEACHER"
}
export declare enum Env {
    production = "production",
    development = "development",
    test = "test"
}
export declare enum QuestionSessionStatus {
    failed = "failed",
    passed = "passed",
    started = "started"
}
export declare enum SessionStatus {
    pending = "pending",
    started = "started",
    completed = "completed"
}
export declare enum QuizStatus {
    active = "active",
    disactive = "disactive"
}
export declare enum BooleanString {
    true = "true",
    false = "false"
}
