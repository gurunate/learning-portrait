import { NextRequest, NextResponse } from 'next/server';

import log from '@/lib/logger/server';
import { prisma } from '@/lib/prisma';

/**
 * @swagger
 * /api/instructors:
 *   get:
 *     summary: Get a list of instructors
 *     tags:
 *       - instructors
 *     responses:
 *       200:
 *         description: A list of instructors
 * @param request
 * @returns
 */
export const GET = async (request: NextRequest) => {
    log.trace('GET instructors');

    try {
        const instructors = await prisma.instructor.findMany({
            where: {
                active: true
            }
        });

        return NextResponse.json(instructors);
    } catch (error) {
        log.error({ error }, 'GET instructors');
        return NextResponse.json(error, { status: 404 });
    }
};

/**
 * @swagger
 * /api/instructors:
 *   post:
 *     summary: Create a instructor
 *     tags:
 *       - instructors
 *     responses:
 *       200:
 *         description: The instructor
 * @param request
 * @returns
 */
export const POST = async (request: NextRequest) => {
    log.trace('instructors POST');

    const data = await request.json();

    log.debug({ data }, 'instructors POST');

    try {
        const instructor = await prisma.instructor.create({
            data
        });

        return NextResponse.json(instructor);
    } catch (error) {
        log.error({ error }, 'instructors POST');
        return NextResponse.json(error, { status: 409 });
    }
};
