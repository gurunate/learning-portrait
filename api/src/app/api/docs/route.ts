// @ts-ignore
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Learning Portrait API',
            version: '1.0.0'
        }
    },
    apis: ['./src/app/api/**/route.ts'] // files containing annotations as above
};

export const GET = () => Response.json(swaggerJsdoc(options));
