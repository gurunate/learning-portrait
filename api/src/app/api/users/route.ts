import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Find all users
 *
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
 * Create user
 *
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
