import { PrismaClient } from '@prisma/client';

const {
    DB_PROVIDER,
    DB_USERNAME,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_DATABASE,
    DB_SCHEMA
} = process.env;

const url = `${DB_PROVIDER}://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}?schema=${DB_SCHEMA}`;

const prisma = DB_PASSWORD
    ? new PrismaClient({
          datasources: {
              db: { url }
          }
      })
    : {};

module.exports = {
    prisma
};
