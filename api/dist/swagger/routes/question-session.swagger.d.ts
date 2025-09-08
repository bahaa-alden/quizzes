/**
 * @swagger
 * tags:
 *   name: question-sessions
 *   description: QuestionSession management and retrieval
 */
/**
 * @swagger
 * /question-sessions:
 *   post:
 *     summary: Create a questionSession
 *     description: USER,ADMIN can create questionSession.
 *     tags: [question-sessions]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createQuestionSession'
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
 *                     $ref: '#/components/schemas/QuestionSession'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all question-sessions
 *     description: USER can retrieve all question-sessions.
 *     tags: [question-sessions]
 *     security:
 *       - Bearer: []
 *     parameters:
  # filters
 *       - in: query
 *         name: sessionId
 *         schema:
 *           type: string
 *         description: filter for sessionId field

 *       - in: query
 *         name: bookmarked
 *         schema:
 *           type: boolean
 *         description: filter for  bookmarked field
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
 *         description: Maximum number of question-sessions
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
 *                     $ref: '#/components/schemas/QuestionSession'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */
/**
 * @swagger
 * /question-sessions/{id}:
 *   get:
 *     summary: Get a questionSession
 *     description: USER can use this router.
 *     tags: [question-sessions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuestionSession id
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
 *                     $ref: '#/components/schemas/QuestionSession'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a questionSession
 *     description: USER,ADMIN can use this router.
 *     tags: [question-sessions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuestionSession id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateQuestionSession'
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
 *                     $ref: '#/components/schemas/QuestionSession'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  questionSession.
 *     description: ADMIN can use this router.
 *     tags: [question-sessions]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: QuestionSession id
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
export declare const QuestionSession: {
    type: string;
    properties: {
        id: {
            type: string;
        };
        sessionId: {
            type: string;
        };
        questionId: {
            type: string;
        };
        time: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
        bookmarked: {
            type: string;
        };
        answer: {
            type: string;
        };
    };
    example: {
        id: string;
        sessionId: string;
        questionId: string;
        time: number;
        status: string;
        bookmarked: boolean;
        answer: number;
        createdAt: string;
        updatedAt: string;
    };
};
export declare const createQuestionSession: {
    type: string;
    properties: {
        sessionId: {
            type: string;
        };
        questionId: {
            type: string;
        };
        time: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
        bookmarked: {
            type: string;
        };
        answer: {
            type: string;
        };
    };
    example: {
        sessionId: string;
        questionId: string;
        time: number;
        status: string;
        bookmarked: boolean;
        answer: number;
    };
    required: string[];
};
export declare const updateQuestionSession: {
    type: string;
    properties: {
        sessionId: {
            type: string;
        };
        questionId: {
            type: string;
        };
        time: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
        bookmarked: {
            type: string;
        };
        answer: {
            type: string;
        };
    };
    example: {
        sessionId: string;
        questionId: string;
        time: number;
        status: string;
        bookmarked: boolean;
        answer: number;
    };
};
