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
 *     description: ADMIN,TEACHER can create quiz.
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
 *     description: USER,ADMIN,TEACHER can retrieve all quizzes.
 *     tags: [quizzes]
 *     security:
 *       - Bearer: []
 *     parameters:
  # filters
 *       - in: query
 *         name: teacherId
 *         schema:
 *           type: string
 *         description: filter for teacherId field

 *       - in: query
 *         name: subjectId
 *         schema:
 *           type: string
 *         description: filter for subjectId field

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
 *     description: ADMIN,TEACHER can create question.
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
 *     description: USER,ADMIN,TEACHER can use this router.
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
 *     description: ADMIN,TEACHER can use this router.
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
 *     description: ADMIN,TEACHER can use this router.
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
export declare const Quiz: {
    type: string;
    properties: {
        id: {
            type: string;
        };
        teacherId: {
            type: string;
        };
        subjectId: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
        name: {
            type: string;
        };
    };
    example: {
        id: string;
        teacherId: string;
        subjectId: string;
        status: string;
        name: string;
        createdAt: string;
        updatedAt: string;
    };
};
export declare const createQuiz: {
    type: string;
    properties: {
        subjectId: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
        name: {
            type: string;
        };
    };
    example: {
        subjectId: string;
        status: string;
        name: string;
    };
    required: string[];
};
export declare const updateQuiz: {
    type: string;
    properties: {
        subjectId: {
            type: string;
        };
        status: {
            type: string;
            enum: string[];
        };
        name: {
            type: string;
        };
    };
    example: {
        subjectId: string;
        status: string;
        name: string;
    };
};
export declare const addQuestions: {
    type: string;
    properties: {
        questions: {
            type: string;
            items: {
                type: string;
                properties: {
                    answers: {
                        type: string;
                        items: {
                            type: string;
                            properties: {
                                isCorrect: {
                                    type: string;
                                };
                                text: {
                                    type: string;
                                };
                            };
                        };
                    };
                    text: {
                        type: string;
                    };
                };
            };
        };
        questionIds: {
            type: string;
            items: {
                type: string;
            };
        };
    };
    example: {
        questions: {
            answers: {
                isCorrect: boolean;
                text: string;
            }[];
            text: string;
        }[];
        questionIds: string[];
    };
    required: string[];
};
