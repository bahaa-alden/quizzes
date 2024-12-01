/**
 * @swagger
 * tags:
 *   name: quizzes
 *   description: Quiz management and retrieval
 */

/**
 * @swagger
 * /quizzes:
 *   post:
 *     summary: Create a quiz
 *     description: ADMIN can create quiz.
 *     tags: [quizzes]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createQuiz'
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
 *                     $ref: '#/components/schemas/Quiz'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all quizzes
 *     description: USER,ADMIN can retrieve all quizzes.
 *     tags: [quizzes]
 *     security:
 *       - Bearer: []
 *     parameters:
  # filters
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: filter for  status field

 *       - in: query
 *         name: quizStatus
 *         schema:
 *           type: string
 *         description: filter for  quizStatus field

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
 *         description: Maximum number of quizzes
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
 *                     $ref: '#/components/schemas/Quiz'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /quizzes/{id}/questions:
 *   post:
 *     summary: Create a question
 *     description: ADMIN can create question.
 *     tags: [questions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addQuestions'
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
 *                     $ref: '#/components/schemas/Question'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /quizzes/{id}:
 *   get:
 *     summary: Get a quiz
 *     description: USER,ADMIN can use this router.
 *     tags: [quizzes]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz id
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
 *                     $ref: '#/components/schemas/Quiz'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a quiz
 *     description: ADMIN can use this router.
 *     tags: [quizzes]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateQuiz'
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
 *                     $ref: '#/components/schemas/Quiz'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  quiz.
 *     description: ADMIN can use this router.
 *     tags: [quizzes]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Quiz id
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

export const Quiz = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    duration: { type: 'number' },
    numberOfAttempts: { type: 'number' },
    status: { type: 'string', enum: ['active', 'disactive'] },
    name: { type: 'string' },
  },
  example: {
    id: '5ebac534954b54139806c112',
    // property example
    duration: 60,

    numberOfAttempts: 3,

    status: 'active',

    name: 'math',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
export const createQuiz = {
  type: 'object',
  properties: {
    // create property
    duration: { type: 'number' },
    numberOfAttempts: { type: 'number' },
    status: { type: 'string', enum: ['active', 'disactive'] },
    name: { type: 'string' },
  },
  example: {
    // create property example
    duration: 60,

    numberOfAttempts: 3,

    status: 'active',

    name: 'math',
  },
  required: [
    // required property
    'duration',

    'numberOfAttempts',

    'name',
  ],
};
export const updateQuiz = {
  type: 'object',
  properties: {
    // update property
    duration: { type: 'number' },
    numberOfAttempts: { type: 'number' },
    status: { type: 'string', enum: ['active', 'disactive'] },
    name: { type: 'string' },
  },
  example: {
    // update property example
    duration: 60,

    numberOfAttempts: 3,

    status: 'active',

    name: 'math',
  },
};

export const addQuestions = {
  type: 'object',
  properties: {
    // create property
    questions: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          answers: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                //  create  properties answers
                isCorrect: { type: 'boolean' },

                text: { type: 'string' },
              },
            },
          },
          text: { type: 'string' },
        },
      },
    },
  },
  example: {
    // create property example
    questions: [
      {
        answers: [
          {
            // create property example answers
            isCorrect: true,

            text: 'i am ali',
          },
        ],

        text: 'who are you?',
      },
    ],
  },
  required: [
    // required property

    'questions.answers.text',

    'questions.text',
  ],
};
