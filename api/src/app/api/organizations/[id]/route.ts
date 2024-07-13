import { isEmpty } from 'lodash';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/organizations/{id}:
 *   get:
 *     summary: Find a organization
 *     tags:
 *       - Organizations
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Organization ID
 *     responses:
 *       200:
 *         description: The organization
 */
export const GET = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Organizations GET');

    const { id } = params;

    if (id) {
        const organization = await prisma.organization.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(organization)) {
            return Response.json(organization, { status: 404 });
        }

        return Response.json(organization);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/organizations/{id}:
 *   put:
 *     summary: Update a organization
 *     tags:
 *       - Organizations
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Organization ID
 *     responses:
 *       200:
 *         description: The organization
 */
export const PUT = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Organizations PUT');

    try {
        const { id } = params;
        const data = await request.json();

        log.debug({ id, data }, 'Organizations PUT');

        if (id) {
            try {
                const organization = await prisma.organization.update({
                    where: { id },
                    data
                });

                return Response.json(organization);
            } catch (error) {
                return Response.json(error, { status: 404 });
            }
        } else {
            return Response.json({ error: 'ID required.' }, { status: 409 });
        }
    } catch (error) {
        log.error({ error }, 'Organizations PUT');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/organizations/{id}:
 *   delete:
 *     summary: Delete a organization
 *     tags:
 *       - Organizations
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Organization ID
 *     responses:
 *       200:
 *         description: The organization
 */
export const DELETE = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Organizations DELETE');

    const { id } = params;

    if (id) {
        const organization = await prisma.organization.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(organization);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
