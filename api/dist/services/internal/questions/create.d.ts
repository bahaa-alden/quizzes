import { IQuestionCreateSchema } from '../../../schemas/question.schema';
export declare const createQuestion: (data: IQuestionCreateSchema) => Promise<import("../../../database/models/question.model").IQuestion>;
