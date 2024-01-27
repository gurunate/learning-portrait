import { compareHash } from '@/lib/utils';
import { prisma } from '@/lib/prisma';
import { sub } from 'date-fns';

const AUTO_UNLOCK_DURATION = 30;
const VALID_TOKEN_DURATION = 15;
const FAILED_ATTEMPTS_MIN = 5;
const FAILED_ATTEMPTS_MAX = 10;

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
 *               name: username
 *               type: string
 *         required: true
 *         description: options
 *     responses:
 *       200:
 *         description: User
 */
export const POST = async (request: Request) => {
    const { username: email, password } = await request.json();

    try {
        // Unlock all locked accounts w/ less than 10 attempts
        // and last updated older than 30 minutes
        await prisma.user.updateMany({
            data: {
                locked: false
            },
            where: {
                locked: true,
                attempts: {
                    lt: FAILED_ATTEMPTS_MAX
                },
                updatedAt: {
                    lte: sub(new Date(), {
                        minutes: AUTO_UNLOCK_DURATION
                    })
                }
            }
        });

        // Lookup active & unlocked user
        const {
            active = false,
            attempts = 0,
            hash,
            locked = true,
            requestToken,
            verified = false,
            ...user
        } = (await prisma.user.findUnique({
            where: {
                email,
                locked: false,
                verified: true,
                active: true
            }
        })) ?? {};

        // handle locked account
        if (locked) {
            // Increment failed attempts
            await prisma.user.update({
                data: {
                    attempts: {
                        increment: 1
                    }
                },
                where: {
                    email
                }
            });

            if (attempts >= FAILED_ATTEMPTS_MAX) {
                throw new Error('Account locked.  Reset password.');
            } else if (attempts >= FAILED_ATTEMPTS_MIN) {
                throw new Error(`Account disabled.`);
            }
        }

        const compare = hash && (await compareHash(password, hash as string));

        if (compare) {
            // Reset attempts on successful authentication
            await prisma.user.update({
                data: {
                    attempts: {
                        set: 0
                    },
                    locked: false
                },
                where: {
                    email
                }
            });

            return Response.json(user);
        }

        // Increment failed attempts
        await prisma.user.update({
            data: {
                attempts: {
                    increment: 1
                }
            },
            where: {
                email
            }
        });

        // Lock users w/ over X failed attempts
        await prisma.user.updateMany({
            data: {
                locked: true
            },
            where: {
                attempts: {
                    gte: FAILED_ATTEMPTS_MIN
                }
            }
        });
        throw new Error('Incorrect username or password.');
    } catch (error: any) {
        console.error('error', error);
        return Response.json(
            { message: error?.message },
            {
                status: 403
            }
        );
    }
};
