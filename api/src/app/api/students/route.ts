import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get a list of students
 *     tags:
 *       - Students
 *     responses:
 *       200:
 *         description: A list of students
 * @param request
 * @returns
 */
export const GET = async (request: Request) => {
    log.trace('Students GET');

    try {
        const students = await prisma.student.findMany({
            where: {
                active: true
            }
        });

        return Response.json(students);
    } catch (error) {
        log.error({ error }, 'Students GET');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Create a student
 *     tags:
 *       - Students
 *     responses:
 *       200:
 *         description: The student
 * @param request
 * @returns
 */
export const POST = async (request: Request) => {
    log.trace('Students POST');

    const data = await request.json();

    log.debug({ data }, 'Students POST');

    try {
        const student = await prisma.student.create({
            data
        });

        Response.json(student);
    } catch (error) {
        log.error({ error }, 'Students POST');
        return Response.json(error, { status: 409 });
    }
};
