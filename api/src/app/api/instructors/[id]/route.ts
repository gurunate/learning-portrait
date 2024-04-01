import { isEmpty } from 'lodash';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/instructors/{id}:
 *   get:
 *     summary: Find a instructor
 *     tags:
 *       - Instructors
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Instructor ID
 *     responses:
 *       200:
 *         description: The instructor
 */
export const GET = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Instructors GET');

    const { id } = params;

    if (id) {
        const instructor = await prisma.instructor.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(instructor)) {
            return Response.json(instructor, { status: 404 });
        }

        return Response.json(instructor);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/instructors/{id}:
 *   put:
 *     summary: Update a instructor
 *     tags:
 *       - Instructors
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Instructor ID
 *     responses:
 *       200:
 *         description: The instructor
 */
export const PUT = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Instructors PUT');

    try {
        const { id } = params;
        const data = await request.json();

        log.debug({ id, data }, 'Instructors PUT');

        if (id) {
            try {
                const instructor = await prisma.instructor.update({
                    where: { id },
                    data
                });

                return Response.json(instructor);
            } catch (error) {
                return Response.json(error, { status: 404 });
            }
        } else {
            return Response.json({ error: 'ID required.' }, { status: 409 });
        }
    } catch (error) {
        log.error({ error }, 'Instructors PUT');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/instructors/{id}:
 *   delete:
 *     summary: Delete a instructor
 *     tags:
 *       - Instructors
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Instructor ID
 *     responses:
 *       200:
 *         description: The instructor
 */
export const DELETE = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Instructors DELETE');

    const { id } = params;

    if (id) {
        const instructor = await prisma.instructor.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(instructor);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
