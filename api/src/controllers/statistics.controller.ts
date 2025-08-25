import { Response, ParsedRequest } from 'express';
import asyncHandler from '../middlewares/asyncHandler';
import { NextFunction } from 'express-serve-static-core';
import { IStatisticsAllSchema } from '../schemas/statistics.schema';

export class StatisticsController {
  // Get all Statistics by author
  public getStatistics = asyncHandler(
    async (
      req: ParsedRequest<void, IStatisticsAllSchema>,
      res: Response,
      next: NextFunction,
    ): Promise<void> => {
      res.ok({
        message: 'success',
        data: {
          teacherId: '64f8c123abcd',
          totalSubjects: 3,
          totalQuizzes: 12,
          quizzesToday: 2,
          totalStudentsApplied: 45,
          studentsToday: 10,
          totalStarted: 20,
          totalCompleted: 15,
          totalPassed: 9,
          totalFailed: 6,
          quizzesByDay: [
            {
              date: '2025-08-24',
              quizzes: [
                { quizId: 'q1', quizName: 'Math Basics', appliedStudents: 10 },
                { quizId: 'q2', quizName: 'Algebra Quiz', appliedStudents: 8 },
              ],
            },
            {
              date: '2025-08-25',
              quizzes: [
                { quizId: 'q3', quizName: 'Physics Quiz', appliedStudents: 12 },
              ],
            },
          ],
          quizzes: [
            {
              quizId: 'q1',
              quizName: 'Math Basics',
              subjectId: 's1',
              totalStudents: 10,
              started: 6,
              completed: 4,
              passed: 3,
              failed: 1,
            },
            {
              quizId: 'q2',
              quizName: 'Algebra Quiz',
              subjectId: 's1',
              totalStudents: 8,
              started: 5,
              completed: 3,
              passed: 2,
              failed: 1,
            },
          ],
        },
      });
    },
  );
}

export const statisticsController = new StatisticsController();
