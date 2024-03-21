import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get a list of courses
 *     tags:
 *       - Courses
 *     responses:
 *       200:
 *         description: A list of courses
 * @param request
 * @returns
 */
export const GET = async (request: Request) => {
    log.trace('Courses GET');

    try {
        const courses = await prisma.course.findMany({
            where: {
                active: true
            }
        });

        return Response.json(courses);
    } catch (error) {
        log.error({ error }, 'Courses GET');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Create a course
 *     tags:
 *       - Courses
 *     responses:
 *       200:
 *         description: The course
 * @param request
 * @returns
 */
export const POST = async (request: Request) => {
    log.trace('Courses POST');

    const data = await request.json();

    log.debug({ data }, 'Courses POST');

    try {
        const course = await prisma.course.create({
            data
        });

        Response.json(course);
    } catch (error) {
        log.error({ error }, 'Courses POST');
        return Response.json(error, { status: 409 });
    }
};
