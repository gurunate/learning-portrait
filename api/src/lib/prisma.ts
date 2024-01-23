import { PrismaClient } from '@prisma/client';

const {
    POSTGRES_DATABASE,
    POSTGRES_HOST,
    POSTGRES_PASSWORD,
    POSTGRES_SCHEMA,
    POSTGRES_URL,
    POSTGRES_USER
} = process.env;

export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: POSTGRES_URL
                ? POSTGRES_URL
                : `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DATABASE}?schema=${POSTGRES_SCHEMA}"`
        }
    }
});
