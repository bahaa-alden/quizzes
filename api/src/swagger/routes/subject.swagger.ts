/**
 * @swagger
 * tags:
 *   name: subjects
 *   description: Subject management and retrieval
 */

/**
 * @swagger
 * /subjects:
 *   post:
 *     summary: Create a subject
 *     description: ADMIN,TEACHER can create subject.
 *     tags: [subjects]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSubject'
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
 *                     $ref: '#/components/schemas/Subject'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all subjects
 *     description: USER,ADMIN,TEACHER can retrieve all subjects.
 *     tags: [subjects]
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
 *         description: Maximum number of subjects
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
 *                     $ref: '#/components/schemas/Subject'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /subjects/{id}:
 *   get:
 *     summary: Get a subject
 *     description: USER,ADMIN,TEACHER can use this router.
 *     tags: [subjects]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Subject id
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
 *                     $ref: '#/components/schemas/Subject'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a subject
 *     description: ADMIN,TEACHER can use this router.
 *     tags: [subjects]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Subject id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateSubject'
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
 *                     $ref: '#/components/schemas/Subject'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  subject.
 *     description: ADMIN,TEACHER can use this router.
 *     tags: [subjects]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Subject id
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

export const Subject = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    teacherId: { type: 'string' },
    isActive: { type: 'boolean' },
    name: { type: 'string' },
  },
  example: {
    id: '5ebac534954b54139806c112',
    // property example
    teacherId: '673c40cd59e293827f79e398',

    isActive: false,

    name: 'math',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
export const createSubject = {
  type: 'object',
  properties: {
    // create property
    teacherId: { type: 'string' },
    isActive: { type: 'boolean' },
    name: { type: 'string' },
  },
  example: {
    // create property example
    teacherId: '673c40cd59e293827f79e398',

    isActive: false,

    name: 'math',
  },
  required: [
    // required property
    'teacherId',

    'name',
  ],
};
export const updateSubject = {
  type: 'object',
  properties: {
    // update property
    teacherId: { type: 'string' },
    isActive: { type: 'boolean' },
    name: { type: 'string' },
  },
  example: {
    // update property example
    teacherId: '673c40cd59e293827f79e398',

    isActive: false,

    name: 'math',
  },
};
