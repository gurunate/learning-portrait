import { isEmpty } from 'lodash';
import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     description: Find user by ID
 *     responses:
 *       200:
 *         description: [{firstName, lastName, email}]
 * @param request
 * @returns
 */
export const GET = async (
    request: Request,
    { params: { id } }: { params: { id: string } }
) => {
    if (id) {
        const user = await prisma.user.findUnique({
            where: {
                id,
                active: true
            }
        });

        if (isEmpty(user)) {
            return Response.json(user, { status: 404 });
        }

        return Response.json(user);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     description: Update user by ID
 *     responses:
 *       200:
 *         description: [{firstName, lastName, email}]
 * @param request
 * @returns
 */
export const PUT = async (
    request: Request,
    { params: { id } }: { params: { id: string } }
) => {
    const data = await request.json();

    console.log('PUT', { id, data });

    if (id) {
        try {
            const user = await prisma.user.update({
                where: { id },
                data
            });

            Response.json(user);
        } catch (error) {
            return Response.json(error, { status: 404 });
        }
    } else {
        return Response.json({ error: 'ID required.' }, { status: 409 });
    }
};

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     description: Delete user by ID
 *     responses:
 *       200:
 *         description: [{firstName, lastName, email}]
 * @param request
 * @returns
 */
export const DELETE = async (
    request: Request,
    { params: { id } }: { params: { id: string } }
) => {
    if (id) {
        const user = await prisma.user.update({
            where: {
                id
            },
            data: {
                active: false
            }
        });

        return Response.json(user);
    } else {
        return Response.json({ error: 'ID required.' }, { status: 404 });
    }
};
