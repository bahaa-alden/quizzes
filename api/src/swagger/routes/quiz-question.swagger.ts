/**
 * @swagger
 * tags:
 *   name: quiz-questions
 *   description: QuizQuestion management and retrieval
 */

/**
 * @swagger
 * /quiz-questions:
 *   post:
 *     summary: Create a quizQuestion
 *     description: ADMIN,TEACHER can create quizQuestion.
 *     tags: [quiz-questions]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createQuizQuestion'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                     $ref: '#/components/schemas/QuizQuestion'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all quiz-questions
 *     description: USER,ADMIN,TEACHER can retrieve all quiz-questions.
 *     tags: [quiz-questions]
 *     security:
 *       - Bearer: []
 *     parameters:
  # filters
 *       - in: query
 *         name: quizId
 *         schema:
 *           type: string
 *         description: filter for quizId field

 *       - in: query
 *         name: fromDate
 *         schema:
 *           type: string
 *         description: from date
 *       - in: query
 *         name: toDate
 *         schema:
 *           type: string
 *         description: to date

 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: what fields do you want to show (ex. name,price)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of quiz-questions
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: key-words you want to search about it
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name,-price)
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/QuizQuestion'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /quiz-questions/{id}:
 *   get:
 *     summary: Get a quizQuestion
 *     description: USER,ADMIN,TEACHER can use this router.
 *     tags: [quiz-questions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuizQuestion id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                     $ref: '#/components/schemas/QuizQuestion'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a quizQuestion
 *     description: ADMIN,TEACHER can use this router.
 *     tags: [quiz-questions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuizQuestion id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateQuizQuestion'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                     $ref: '#/components/schemas/QuizQuestion'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  quizQuestion.
 *     description: ADMIN,TEACHER can use this router.
 *     tags: [quiz-questions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuizQuestion id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   example: null
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

export const QuizQuestion = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    questionId: { type: 'string' },
    quizId: { type: 'string' },
  },
  example: {
    id: '5ebac534954b54139806c112',
    // property example
    questionId: '673c40cd59e293827f79e398',

    quizId: '673c40cd59e293827f79e398',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
export const createQuizQuestion = {
  type: 'object',
  properties: {
    // create property
    questionId: { type: 'string' },
    quizId: { type: 'string' },
  },
  example: {
    // create property example
    questionId: '673c40cd59e293827f79e398',

    quizId: '673c40cd59e293827f79e398',
  },
  required: [
    // required property
    'question',

    'quiz',
  ],
};
export const updateQuizQuestion = {
  type: 'object',
  properties: {
    // update property
    questionId: { type: 'string' },
    quizId: { type: 'string' },
  },
  example: {
    // update property example
    questionId: '673c40cd59e293827f79e398',

    quizId: '673c40cd59e293827f79e398',
  },
};
