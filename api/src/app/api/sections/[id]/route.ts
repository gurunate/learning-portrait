import { isEmpty } from 'lodash';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/sections/{id}:
 *   get:
 *     summary: Find a section
 *     tags:
 *       - Sections
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Section ID
 *     responses:
 *       200:
 *         description: The section
 */
export const GET = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Sections GET');

    const { id } = params;

    if (id) {
        const section = await prisma.section.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(section)) {
            return Response.json(section, { status: 404 });
        }

        return Response.json(section);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/sections/{id}:
 *   put:
 *     summary: Update a section
 *     tags:
 *       - Sections
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Section ID
 *     responses:
 *       200:
 *         description: The section
 */
export const PUT = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Sections PUT');

    try {
        const { id } = params;
        const data = await request.json();

        log.debug({ id, data }, 'Sections PUT');

        if (id) {
            try {
                const section = await prisma.section.update({
                    where: { id },
                    data
                });

                return Response.json(section);
            } catch (error) {
                return Response.json(error, { status: 404 });
            }
        } else {
            return Response.json({ error: 'ID required.' }, { status: 409 });
        }
    } catch (error) {
        log.error({ error }, 'Sections PUT');
        return Response.json(error, { status: 404 });
    }
};

/**
 * @param {Request} request
 * @returns
 * @swagger
 * /api/sections/{id}:
 *   delete:
 *     summary: Delete a section
 *     tags:
 *       - Sections
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Section ID
 *     responses:
 *       200:
 *         description: The section
 */
export const DELETE = async (request: Request, { params }: never) => {
    log.trace({ params }, 'Sections DELETE');

    const { id } = params;

    if (id) {
        const section = await prisma.section.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(section);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
