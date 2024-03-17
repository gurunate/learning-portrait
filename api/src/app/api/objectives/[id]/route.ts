import { isEmpty } from 'lodash';
import { prisma } from '@/lib/prisma';

/**
 * @param request
 * @returns
 * @swagger
 * /api/objectives/{id}:
 *   get:
 *     summary: Find a objective
 *     tags:
 *       - Objectives
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Objective ID
 *     responses:
 *       200:
 *         description: The objective
 */
export const GET = async (
    request: Request,
    { params: { id } }: { params: { id: string } }
) => {
    if (id) {
        const objective = await prisma.objective.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(objective)) {
            return Response.json(objective, { status: 404 });
        }

        return Response.json(objective);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @param request
 * @returns
 * @swagger
 * /api/objectives/{id}:
 *   put:
 *     summary: Update a objective
 *     tags:
 *       - Objectives
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Objective ID
 *     responses:
 *       200:
 *         description: The objective
 */
export const PUT = async (
    request: Request,
    { params: { id } }: { params: { id: string } }
) => {
    const data = await request.json();

    console.log('PUT', { id, data });

    if (id) {
        try {
            const objective = await prisma.objective.update({
                where: { id },
                data
            });

            Response.json(objective);
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
 * /api/objectives/{id}:
 *   delete:
 *     summary: Delete a objective
 *     tags:
 *       - Objectives
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Objective ID
 *     responses:
 *       200:
 *         description: The objective
 */
export const DELETE = async (
    request: Request,
    { params: { id } }: { params: { id: string } }
) => {
    if (id) {
        const objective = await prisma.objective.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(objective);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
