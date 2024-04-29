import { isEmpty } from 'lodash';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Find a student
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     responses:
 *       200:
 *         description: The student
 */
export const GET = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Students GET');

    const { id } = params;

    if (id) {
        const student = await prisma.student.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(student)) {
            return Response.json(student, { status: 404 });
        }

        return Response.json(student);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/students/{id}:
 *   put:
 *     summary: Update a student
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     responses:
 *       200:
 *         description: The student
 */
export const PUT = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Students PUT');

    try {
        const { id } = params;
        const data = await request.json();

        log.debug({ id, data }, 'Students PUT');

        if (id) {
            try {
                const student = await prisma.student.update({
                    where: { id },
                    data
                });

                return Response.json(student);
            } catch (error) {
                return Response.json(error, { status: 404 });
            }
        } else {
            return Response.json({ error: 'ID required.' }, { status: 409 });
        }
    } catch (error) {
        log.error({ error }, 'Students PUT');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: Delete a student
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Student ID
 *     responses:
 *       200:
 *         description: The student
 */
export const DELETE = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Students DELETE');

    const { id } = params;

    if (id) {
        const student = await prisma.student.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(student);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
