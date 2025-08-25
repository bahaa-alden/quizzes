/**
 * @swagger
 * tags:
 *   name: sessions
 *   description: Session management and retrieval
 */

/**
 * @swagger
 * /sessions:
 *   post:
 *     summary: Create a session
 *     description: USER can create session.
 *     tags: [sessions]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSession'
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
 *                     $ref: '#/components/schemas/Session'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all sessions
 *     description: USER,ADMIN,TEACHER can retrieve all sessions.
 *     tags: [sessions]
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
 *         name: studentId
 *         schema:
 *           type: string
 *         description: filter for studentId field

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
 *         description: Maximum number of sessions
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
 *                     $ref: '#/components/schemas/Session'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /sessions/records:
 *   get:
 *     summary: Get all sessions records
 *     description: USER,ADMIN,TEACHER can retrieve all sessions.
 *     tags: [sessions]
 *     security:
 *       - Bearer: []
 *     parameters:
  # filters
 *       - in: query
 *         name: studentId
 *         schema:
 *           type: string
 *         description: filter for studentId field
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
 *                     $ref: '#/components/schemas/Record'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /sessions/{id}/reset:
 *   post:
 *     summary: Reset a session
 *     description: USER can use this router.
 *     tags: [sessions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Session id
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
 *                     $ref: '#/components/schemas/Session'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /sessions/{id}:
 *   get:
 *     summary: Get a session
 *     description: USER,ADMIN,TEACHER can use this router.
 *     tags: [sessions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Session id
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
 *                     $ref: '#/components/schemas/Session'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a session
 *     description: USER,ADMIN,TEACHER can use this router.
 *     tags: [sessions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Session id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateSession'
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
 *                     $ref: '#/components/schemas/Session'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  session.
 *     description: ADMIN,TEACHER can use this router.
 *     tags: [sessions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Session id
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

import { Quiz } from './quiz.swagger';

export interface Result {
  quizId: string;
  quiz: object;
  questionInSession: number;
  question: number;
  status: string;
}

export const Record = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    score: { type: 'number' },
    sessionId: { type: 'string' },
    quizId: { type: 'string' },
    quiz: Quiz,
    sessionQuestions: { type: 'number' },
    questions: { type: 'number' },
    status: { type: 'string', enum: ['pending', 'started', 'completed'] },
  },
  example: {
    sessionId: '674c6b364604c23e5b873890',
    quizId: '674c693de953e9b52e4fb6de',
    quiz: {
      duration: 60,
      numberOfAttempts: 3,
      status: 'active',
      name: 'math',
      createdAt: '2024-12-01T13:48:45.293Z',
      updatedAt: '2024-12-01T13:48:45.293Z',
      questionIds: ['674c69b47542a606ac68f10d', '674c6a057542a606ac68f117'],
      id: '674c693de953e9b52e4fb6de',
    },
    sessionQuestions: 3,
    questions: 5,
    status: 'processing',
  },
};

export const Session = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    quizId: { type: 'string' },
    studentId: { type: 'string' },
    status: { type: 'string', enum: ['pending', 'started', 'completed'] },
  },
  example: {
    id: '5ebac534954b54139806c112',
    // property example
    score: 5,

    quizId: '673c40cd59e293827f79e398',

    studentId: '673c40cd59e293827f79e398',

    status: 'pending',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};

export const createSession = {
  type: 'object',
  properties: {
    // create property
    score: { type: 'number' },
    quizId: { type: 'string' },
    studentId: { type: 'string' },
    status: { type: 'string', enum: ['pending', 'started', 'completed'] },
  },
  example: {
    // create property example
    score: 5,

    quizId: '673c40cd59e293827f79e398',

    studentId: '673c40cd59e293827f79e398',

    status: 'pending',
  },
  required: [
    // required property

    'quiz',

    'student',
  ],
};
export const updateSession = {
  type: 'object',
  properties: {
    // update property
    score: { type: 'number' },
    quizId: { type: 'string' },
    studentId: { type: 'string' },
    status: { type: 'string', enum: ['pending', 'started', 'completed'] },
  },
  example: {
    // update property example
    score: 5,

    quizId: '673c40cd59e293827f79e398',

    studentId: '673c40cd59e293827f79e398',

    status: 'pending',
  },
};
