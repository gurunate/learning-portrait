import { prisma } from '@/lib/prisma';
import { type NextRequest } from 'next/server';

/**
 * @swagger
 * /api/objectives:
 *   get:
 *     summary: Get a list of objectives
 *     tags:
 *       - Objectives
 *     parameters:
 *       - in: query
 *         name: courseId
 *         schema:
 *           type: string
 *         required: false
 *         description: Course ID
 *     responses:
 *       200:
 *         description: A list of objectives
 * @param request
 * @returns
 */
export const GET = async (request: NextRequest) => {
    const searchParams = request.nextUrl.searchParams;
    const courseId = searchParams.get('courseId');

    const args = {
        where: {
            active: true
        }
    };

    if (courseId) {
        // @ts-ignore
        args.where.courseId = courseId;
    }

    const objectives = await prisma.objective.findMany(args);

    return Response.json(objectives);
};

/**
 * @swagger
 * /api/objectives:
 *   post:
 *     summary: Create a objective
 *     tags:
 *       - Objectives
 *     responses:
 *       200:
 *         description: The objective
 * @param request
 * @returns
 */
export const POST = async (request: Request) => {
    const data = await request.json();

    try {
        const objective = await prisma.objective.create({
            data
        });

        Response.json(objective);
    } catch (error) {
        return Response.json(error, { status: 409 });
    }
};
