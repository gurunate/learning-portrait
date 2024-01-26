import { isEmpty } from 'lodash';
import { prisma } from '@/lib/prisma';

/**
 * @param request
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
export const GET = async (
    request: Request,
    { params: { id } }: { params: { id: string } }
) => {
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
 * @param request
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
export const PUT = async (
    request: Request,
    { params: { id } }: { params: { id: string } }
) => {
    const data = await request.json();

    console.log('PUT', { id, data });

    if (id) {
        try {
            const course = await prisma.course.update({
                where: { id },
                data
            });

            Response.json(course);
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
export const DELETE = async (
    request: Request,
    { params: { id } }: { params: { id: string } }
) => {
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
