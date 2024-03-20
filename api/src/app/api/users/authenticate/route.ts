import { isEmpty } from 'lodash';
import jwt from 'jsonwebtoken';
import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 *
 * @param {Request} request
 * @swagger
 * /api/users/authenticate:
 *   post:
 *     summary: Authenticate a user
 *     tags:
 *       - Users
 *     parameters:
 *       - in: query
 *         schema:
 *           type: object
 *           items:
 *             type: object
 *             items:
 *               name: email
 *               type: string
 *         required: true
 *         description: options
 *     responses:
 *       200:
 *         description: Auth tokens
 */
export const POST = async (request: Request) => {
    log.trace('users/authenticate POST');

    const { email, hash } = await request.json();

    // Look-up user
    const user = await prisma.user.findUnique({
        where: {
            email,
            hash,
            locked: false,
            verified: true,
            active: true
        }
    });

    if (!isEmpty(user)) {
        const token = jwt.sign(
            {
                iss: 'https://www.learningportrait.com/',
                sub: user.email,
                aud: [
                    'my-api-identifier',
                    'https://www.learningportrait.com/api/userinfo'
                ],
                azp: user.id,
                exp: 1489179954,
                iat: 1489143954,
                scope: 'openid profile email address phone read:appointments'
            },
            'this is a test'
        );

        return Response.json({ token });
    } else {
        return Response.json(
            { message: 'Incorrect username or password.' },
            {
                status: 403
            }
        );
    }
};
