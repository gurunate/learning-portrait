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
    const courses = await prisma.course.findMany({
        where: {
            active: true
        }
    });

    return Response.json(courses);
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
    const data = await request.json();

    try {
        const course = await prisma.course.create({
            data
        });

        Response.json(course);
    } catch (error) {
        return Response.json(error, { status: 409 });
    }
};
