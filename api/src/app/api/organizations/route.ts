import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/organizations:
 *   get:
 *     summary: Get a list of organizations
 *     tags:
 *       - Organizations
 *     responses:
 *       200:
 *         description: A list of organizations
 * @returns
 */
export const GET = async () => {
    log.trace('Organizations GET');

    try {
        const organizations = await prisma.organization.findMany({
            where: {
                active: true
            }
        });

        return Response.json(organizations);
    } catch (error) {
        log.error({ error }, 'Organizations GET');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @swagger
 * /api/organizations:
 *   post:
 *     summary: Create a organization
 *     tags:
 *       - Organizations
 *     responses:
 *       200:
 *         description: The organization
 * @param request
 * @returns
 */
export const POST = async (request: Request) => {
    log.trace('Organizations POST');

    const data = await request.json();

    log.debug({ data }, 'Organizations POST');

    try {
        const organization = await prisma.organization.create({
            data
        });

        return Response.json(organization);
    } catch (error) {
        log.error({ error }, 'Organizations POST');
        return Response.json(error, { status: 409 });
    }
};
