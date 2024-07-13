import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/sections:
 *   get:
 *     summary: Get a list of sections
 *     tags:
 *       - Sections
 *     responses:
 *       200:
 *         description: A list of sections
 * @param request
 * @returns
 */
export const GET = async (request: Request) => {
    log.trace('Sections GET');

    try {
        const sections = await prisma.section.findMany({
            where: {
                active: true
            }
        });

        return Response.json(sections);
    } catch (error) {
        log.error({ error }, 'Sections GET');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @swagger
 * /api/sections:
 *   post:
 *     summary: Create a section
 *     tags:
 *       - Sections
 *     responses:
 *       200:
 *         description: The section
 * @param request
 * @returns
 */
export const POST = async (request: Request) => {
    log.trace('Sections POST');

    const data = await request.json();

    log.debug({ data }, 'Sections POST');

    try {
        const section = await prisma.section.create({
            data
        });

        return Response.json(section);
    } catch (error) {
        log.error({ error }, 'Sections POST');
        return Response.json(error, { status: 409 });
    }
};
