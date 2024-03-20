import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get a list of users
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
 * @param request
 * @returns
 */
export const GET = async (request: Request) => {
    log.trace('Users GET');

    const users = await prisma.user.findMany({
        where: {
            active: true
        }
    });

    return Response.json(users);
};

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a user
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: The user
 * @param request
 * @returns
 */
export const POST = async (request: Request) => {
    log.trace('Users POST');

    const data = await request.json();

    try {
        const user = await prisma.user.create({
            data
        });

        return Response.json(user);
    } catch (error) {
        return Response.json(error, { status: 409 });
    }
};
