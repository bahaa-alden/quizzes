"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const ApiError_1 = require("../core/ApiError");
exports.default = (err, req, res, next) => {
    if (err.name === 'AuthenticationError')
        ApiError_1.ApiError.handle(new ApiError_1.AuthFailureError('unauthorized'), res);
    if (err instanceof ApiError_1.ApiError) {
        ApiError_1.ApiError.handle(err, res);
        if (err.type === ApiError_1.ErrorType.INTERNAL)
            console.error(`500 - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    }
    else {
        console.error(`500 - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
        console.error(err);
        if (config_1.env_vars.env === 'development') {
            return res.status(500).send(err);
        }
        ApiError_1.ApiError.handle(new ApiError_1.InternalError(), res);
    }
};
//# sourceMappingURL=errHandler.js.map