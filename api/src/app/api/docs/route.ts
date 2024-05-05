import pkg from '../../../../package.json';
import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: pkg.description,
            version: pkg.version
        },
        components: {
            securitySchemes: {
                Bearer: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: [
            {
                Bearer: []
            }
        ]
    },
    apis: ['./src/app/api/**/route.ts'] // files containing annotations as above
};

export const GET = () => Response.json(swaggerJsdoc(options));
