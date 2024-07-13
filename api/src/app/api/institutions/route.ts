import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/institutions:
 *   get:
 *     summary: Get a list of institutions
 *     tags:
 *       - Institutions
 *     responses:
 *       200:
 *         description: A list of institutions
 * @returns
 */
export const GET = async () => {
    log.trace('Institutions GET');

    try {
        const institutions = await prisma.institution.findMany({
            where: {
                active: true
            }
        });

        return Response.json(institutions);
    } catch (error) {
        log.error({ error }, 'Institutions GET');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @swagger
 * /api/institutions:
 *   post:
 *     summary: Create a institution
 *     tags:
 *       - Institutions
 *     responses:
 *       200:
 *         description: The institution
 * @param request
 * @returns
 */
export const POST = async (request: Request) => {
    log.trace('Institutions POST');

    const data = await request.json();

    log.debug({ data }, 'Institutions POST');

    try {
        const institution = await prisma.institution.create({
            data
        });

        return Response.json(institution);
    } catch (error) {
        log.error({ error }, 'Institutions POST');
        return Response.json(error, { status: 409 });
    }
};
