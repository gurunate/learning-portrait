import { isEmpty } from 'lodash';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @param _request
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
 * @param {Request} _request
 * @returns {Response}
 */
export const GET = async (
    _request: Request,
    { params }: never
): Promise<Response> => {
    const { id } = params;
    log.trace({ params }, `Objectives/${id} GET`);

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
        log.error({ error: 'ID required.' }, `Objectives/${id} GET`);
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
 * @param {Request} request
 * @returns {Response}
 */
export const PUT = async (
    request: Request,
    { params }: never
): Promise<Response> => {
    const { id } = params;
    log.trace({ params }, `Objectives/${id} GET`);

    const data = await request.json();

    console.log('PUT', { id, data });

    if (id) {
        try {
            const objective = await prisma.objective.update({
                where: { id },
                data
            });

            return Response.json(objective);
        } catch (error) {
            return Response.json(error, { status: 404 });
        }
    } else {
        log.error({ error: 'ID required.' }, `Objectives/${id} GET`);
        return Response.json({ error: 'ID required.' }, { status: 409 });
    }
};

/**
 * @param _request
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
 * @param {Request} _request
 * @returns {Response}
 */
export const DELETE = async (
    _request: Request,
    { params }: never
): Promise<Response> => {
    const { id } = params;
    log.trace({ params }, `Objectives/${id} DELETE`);

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
        log.error({ error: 'ID required.' }, `Objectives/${id} GET`);
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
