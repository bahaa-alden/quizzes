"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuestion = void 0;
const ApiError_1 = require("../../../core/ApiError");
const question_repository_1 = require("../../../database/repositories/question.repository");
const createQuestion = async (data) => {
    if (data.answers) {
        data.answers = data.answers.map((ans, index) => ({
            ...ans,
            sorting: index + 1,
        }));
    }
    const question = await question_repository_1.questionRepository.insert(data);
    if (question === null) {
        throw new ApiError_1.InternalError();
    }
    return question;
};
exports.createQuestion = createQuestion;
//# sourceMappingURL=create.js.map