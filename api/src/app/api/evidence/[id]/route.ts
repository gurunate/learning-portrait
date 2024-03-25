import { isEmpty } from 'lodash';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/evidence/{id}:
 *   get:
 *     summary: Find a piece of evidence
 *     tags:
 *       - Evidence
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Evidence ID
 *     responses:
 *       200:
 *         description: The piece of evidence
 */
export const GET = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Evidence GET');

    const { id } = params;

    if (id) {
        const evidence = await prisma.evidence.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(evidence)) {
            return Response.json(evidence, { status: 404 });
        }

        return Response.json(evidence);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/evidence/{id}:
 *   put:
 *     summary: Update a piece of evidence
 *     tags:
 *       - Evidence
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Evidence ID
 *     responses:
 *       200:
 *         description: The piece of evidence
 */
export const PUT = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Evidence PUT');

    try {
        const { id } = params;
        const data = await request.json();

        log.debug({ id, data }, 'Evidence PUT');

        if (id) {
            try {
                const evidence = await prisma.evidence.update({
                    where: { id },
                    data
                });

                return Response.json(evidence);
            } catch (error) {
                return Response.json(error, { status: 404 });
            }
        } else {
            return Response.json({ error: 'ID required.' }, { status: 409 });
        }
    } catch (error) {
        log.error({ error }, 'Evidence PUT');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/evidence/{id}:
 *   delete:
 *     summary: Delete a piece of evidence
 *     tags:
 *       - Evidence
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Evidence ID
 *     responses:
 *       200:
 *         description: The piece of evidence
 */
export const DELETE = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Evidence DELETE');

    const { id } = params;

    if (id) {
        const evidence = await prisma.evidence.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(evidence);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
