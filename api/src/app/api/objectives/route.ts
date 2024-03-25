import log from '@/lib/logger/server';
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
 * @param {Request} request
 * @returns {Response}
 */
export const GET = async (request: NextRequest): Promise<Response> => {
    log.trace('Objectives GET');

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
 * @param {Request} request
 * @returns {Response}
 */
export const POST = async (request: Request): Promise<Response> => {
    log.trace('Objectives POST');

    const data = await request.json();

    log.debug({ data }, 'Objectives POST');

    try {
        const objective = await prisma.objective.create({
            data
        });

        return Response.json(objective);
    } catch (error) {
        log.error({ error }, 'Objectives POST');
        return Response.json(error, { status: 409 });
    }
};
