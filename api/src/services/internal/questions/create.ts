import { InternalError } from '../../../core/ApiError';
import { questionRepository } from '../../../database/repositories/question.repository';
import { IQuestionCreateSchema } from '../../../schemas/question.schema';

export const createQuestion = async (data: IQuestionCreateSchema) => {
  if (data.answers) {
    data.answers = data.answers.map((ans, index) => ({
      ...ans,
      sorting: index + 1,
    }));
  }
  const question = await questionRepository.insert(data);
  if (question === null) {
    throw new InternalError();
  }
  return question;
};
