import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/evidence:
 *   get:
 *     summary: Get a list of evidence
 *     tags:
 *       - Evidence
 *     responses:
 *       200:
 *         description: A list of evidence
 * @param request
 * @returns
 */
export const GET = async (request: Request) => {
    log.trace('Evidence GET');

    try {
        const evidence = await prisma.evidence.findMany({
            where: {
                active: true
            }
        });

        return Response.json(evidence);
    } catch (error) {
        log.error({ error }, 'Evidence GET');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @swagger
 * /api/evidence:
 *   post:
 *     summary: Create a piece of evidence
 *     tags:
 *       - Evidence
 *     responses:
 *       200:
 *         description: The piece of evidence
 * @param request
 * @returns
 */
export const POST = async (request: Request) => {
    log.trace('Evidence POST');

    const data = await request.json();

    log.debug({ data }, 'Evidence POST');

    try {
        const evidence = await prisma.evidence.create({
            data
        });

        Response.json(evidence);
    } catch (error) {
        log.error({ error }, 'Evidence POST');
        return Response.json(error, { status: 409 });
    }
};
