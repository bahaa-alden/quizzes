/**
 * @swagger
 * tags:
 *   name: settings
 *   description: Setting management and retrieval
 */

/**
 * @swagger
 * /settings:
 *   post:
 *     summary: Create a setting
 *     description: ADMIN,TEACHER can create setting.
 *     tags: [settings]
 *     security:
 *       - Bearer: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSetting'
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
 *                     $ref: '#/components/schemas/Setting'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all settings
 *     description: USER,ADMIN,TEACHER can retrieve all settings.
 *     tags: [settings]
 *     security:
 *       - Bearer: []
 *     parameters:
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
 *         description: Maximum number of settings
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
 *                     $ref: '#/components/schemas/Setting'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /settings/{id}:
 *   get:
 *     summary: Get a setting
 *     description: USER,ADMIN,TEACHER can use this router.
 *     tags: [settings]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Setting id
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
 *                     $ref: '#/components/schemas/Setting'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a setting
 *     description: ADMIN,TEACHER can use this router.
 *     tags: [settings]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Setting id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateSetting'
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
 *                     $ref: '#/components/schemas/Setting'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  setting.
 *     description: ADMIN,TEACHER can use this router.
 *     tags: [settings]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Setting id
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

export const Setting = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    numberOfAttempts: { type: 'number' },
    duration: { type: 'number' },
  },
  example: {
    id: '5ebac534954b54139806c112',
    // property example
    numberOfAttempts: 3,

    duration: 60,

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
export const createSetting = {
  type: 'object',
  properties: {
    // create property
    numberOfAttempts: { type: 'number' },
    duration: { type: 'number' },
  },
  example: {
    // create property example
    numberOfAttempts: 3,

    duration: 60,
  },
  required: [
    // required property
    'numberOfAttempts',

    'duration',
  ],
};
export const updateSetting = {
  type: 'object',
  properties: {
    // update property
    numberOfAttempts: { type: 'number' },
    duration: { type: 'number' },
  },
  example: {
    // update property example
    numberOfAttempts: 3,

    duration: 60,
  },
};
