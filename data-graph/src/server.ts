import 'dotenv/config';

import { dataSources, resolvers, typeDefs } from './schema';

import { ApolloServer } from '@apollo/server';
import log from './lib/logger/server';
import { startStandaloneServer } from '@apollo/server/standalone';

async function startApolloServer() {
    const port = parseInt(process.env.PORT, 10) ?? 4000;

    const server = new ApolloServer({ typeDefs, resolvers, logger: log });

    const { url } = await startStandaloneServer(server, {
        listen: { port },
        context: async ({ req }) => {
            const { cache } = server;

            /**
             * TODO 
                {
                    "sub": "1234567890",
                    "name": "John Doe",
                    "iat": 1516239022
                }
             */

            const token =
                req.headers.token ||
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ';

            return {
                dataSources: dataSources({ cache, token }),
                token
            };
        }
    });
    console.log(`
      🚀  Server is running!
      📭  Query at ${url}
    `);
}

startApolloServer();
