import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/users:
 *   get:
 *     description: Returns a list of users
 *     responses:
 *       200:
 *         description: [{firstName, lastName, email}]
 * @param request
 * @returns
 */
export const GET = async (request: Request) => {
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
 *     description: Create user
 *     responses:
 *       200:
 *         description: [{firstName, lastName, email}]
 * @param request
 * @returns
 */
export const POST = async (request: Request) => {
    const data = await request.json();

    try {
        const user = await prisma.user.create({
            data
        });

        Response.json(user);
    } catch (error) {
        return Response.json(error, { status: 409 });
    }
};
