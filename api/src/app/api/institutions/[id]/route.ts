import { isEmpty } from 'lodash';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/institutions/{id}:
 *   get:
 *     summary: Find a institution
 *     tags:
 *       - Institutions
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Institution ID
 *     responses:
 *       200:
 *         description: The institution
 */
export const GET = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Institutions GET');

    const { id } = params;

    if (id) {
        const institution = await prisma.institution.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(institution)) {
            return Response.json(institution, { status: 404 });
        }

        return Response.json(institution);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/institutions/{id}:
 *   put:
 *     summary: Update a institution
 *     tags:
 *       - Institutions
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Institution ID
 *     responses:
 *       200:
 *         description: The institution
 */
export const PUT = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Institutions PUT');

    try {
        const { id } = params;
        const data = await request.json();

        log.debug({ id, data }, 'Institutions PUT');

        if (id) {
            try {
                const institution = await prisma.institution.update({
                    where: { id },
                    data
                });

                return Response.json(institution);
            } catch (error) {
                return Response.json(error, { status: 404 });
            }
        } else {
            return Response.json({ error: 'ID required.' }, { status: 409 });
        }
    } catch (error) {
        log.error({ error }, 'Institutions PUT');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/institutions/{id}:
 *   delete:
 *     summary: Delete a institution
 *     tags:
 *       - Institutions
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Institution ID
 *     responses:
 *       200:
 *         description: The institution
 */
export const DELETE = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Institutions DELETE');

    const { id } = params;

    if (id) {
        const institution = await prisma.institution.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(institution);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
