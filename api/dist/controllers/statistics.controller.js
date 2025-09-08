"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statisticsController = exports.StatisticsController = void 0;
const asyncHandler_1 = require("../middlewares/asyncHandler");
class StatisticsController {
    // Get all Statistics by author
    getStatistics = (0, asyncHandler_1.default)(async (req, res, next) => {
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
    });
}
exports.StatisticsController = StatisticsController;
exports.statisticsController = new StatisticsController();
//# sourceMappingURL=statistics.controller.js.map