import { isEmpty } from 'lodash';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @param request
 * @returns
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Find a user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: The user
 */
export const GET = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Users GET');

    const { id } = params;

    if (id) {
        const user = await prisma.user.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(user)) {
            return Response.json(user, { status: 404 });
        }

        return Response.json(user);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @param request
 * @returns
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: The user
 */
export const PUT = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Users PUT');

    const { id } = params;

    const data = await request.json();

    console.log('PUT', { id, data });

    if (id) {
        try {
            const user = await prisma.user.update({
                where: { id },
                data
            });

            Response.json(user);
        } catch (error) {
            return Response.json(error, { status: 404 });
        }
    } else {
        return Response.json({ error: 'ID required.' }, { status: 409 });
    }
};

/**
 * @param request
 * @returns
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: The user
 */
export const DELETE = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Users DELETE');

    const { id } = params;

    if (id) {
        const user = await prisma.user.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(user);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
