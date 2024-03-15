import 'dotenv/config';

import { dataSources, resolvers, typeDefs } from './schema';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

async function startApolloServer() {
    const port = parseInt(process.env.PORT, 10) ?? 4000;

    const server = new ApolloServer({ typeDefs, resolvers });

    const { url } = await startStandaloneServer(server, {
        listen: { port },
        context: async ({ req }) => {
            const { cache } = server;
            const token = req.headers.token;

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
