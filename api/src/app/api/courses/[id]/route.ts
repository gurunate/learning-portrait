import { isEmpty } from 'lodash';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Find a course
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Course ID
 *     responses:
 *       200:
 *         description: The course
 */
export const GET = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Courses GET');

    const { id } = params;

    if (id) {
        const course = await prisma.course.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(course)) {
            return Response.json(course, { status: 404 });
        }

        return Response.json(course);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/courses/{id}:
 *   put:
 *     summary: Update a course
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Course ID
 *     responses:
 *       200:
 *         description: The course
 */
export const PUT = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Courses PUT');

    try {
        const { id } = params;
        const data = await request.json();

        log.debug({ id, data }, 'Courses PUT');

        if (id) {
            try {
                const course = await prisma.course.update({
                    where: { id },
                    data
                });

                return Response.json(course);
            } catch (error) {
                return Response.json(error, { status: 404 });
            }
        } else {
            return Response.json({ error: 'ID required.' }, { status: 409 });
        }
    } catch (error) {
        log.error({ error }, 'Courses PUT');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/courses/{id}:
 *   delete:
 *     summary: Delete a course
 *     tags:
 *       - Courses
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Course ID
 *     responses:
 *       200:
 *         description: The course
 */
export const DELETE = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Courses DELETE');

    const { id } = params;

    if (id) {
        const course = await prisma.course.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(course);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
