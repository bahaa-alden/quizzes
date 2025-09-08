"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanString = exports.QuizStatus = exports.SessionStatus = exports.QuestionSessionStatus = exports.Env = exports.RoleCode = exports.CarCategory = exports.UserStatus = exports.getValuesOf = exports.getKeysOf = void 0;
const getKeysOf = (obj) => Object.keys(obj).filter((key) => Number.isNaN(Number(key)));
exports.getKeysOf = getKeysOf;
const getValuesOf = (obj) => (0, exports.getKeysOf)(obj).map((key) => obj[key]);
exports.getValuesOf = getValuesOf;
var UserStatus;
(function (UserStatus) {
    UserStatus["active"] = "active";
    UserStatus["disactive"] = "disactive";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
var CarCategory;
(function (CarCategory) {
    CarCategory["truck"] = "truck";
})(CarCategory || (exports.CarCategory = CarCategory = {}));
var RoleCode;
(function (RoleCode) {
    RoleCode["USER"] = "USER";
    RoleCode["ADMIN"] = "ADMIN";
    RoleCode["TEACHER"] = "TEACHER";
})(RoleCode || (exports.RoleCode = RoleCode = {}));
var Env;
(function (Env) {
    Env["production"] = "production";
    Env["development"] = "development";
    Env["test"] = "test";
})(Env || (exports.Env = Env = {}));
// <creating-enum-type />
var QuestionSessionStatus;
(function (QuestionSessionStatus) {
    QuestionSessionStatus["failed"] = "failed";
    QuestionSessionStatus["passed"] = "passed";
    QuestionSessionStatus["started"] = "started";
})(QuestionSessionStatus || (exports.QuestionSessionStatus = QuestionSessionStatus = {}));
var SessionStatus;
(function (SessionStatus) {
    SessionStatus["pending"] = "pending";
    SessionStatus["started"] = "started";
    SessionStatus["completed"] = "completed";
})(SessionStatus || (exports.SessionStatus = SessionStatus = {}));
var QuizStatus;
(function (QuizStatus) {
    QuizStatus["active"] = "active";
    QuizStatus["disactive"] = "disactive";
})(QuizStatus || (exports.QuizStatus = QuizStatus = {}));
var BooleanString;
(function (BooleanString) {
    BooleanString["true"] = "true";
    BooleanString["false"] = "false";
})(BooleanString || (exports.BooleanString = BooleanString = {}));
//# sourceMappingURL=enum.js.map