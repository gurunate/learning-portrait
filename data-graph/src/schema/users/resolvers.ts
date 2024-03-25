import log from '../../lib/logger/server';

export const resolvers = {
    Query: {
        users: async (
            _: any,
            { input }: any,
            { dataSources }: any
        ): Promise<unknown> => {
            log.debug({ input }, 'users query');

            const response = await dataSources.UsersAPI.getUsers(input);

            log.debug({ response }, 'users query');

            return response;
        }
    },
    Mutation: {
        addUser: async (_parent: any, { input }: any, { dataSources }: any) => {
            log.debug({ input }, 'addUser');

            const response = await dataSources.UsersAPI.createUser(input);

            log.debug({ response }, 'addUser');

            return response;
        },
        updateUser: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'updateUser');

            const response = await dataSources.UsersAPI.updateUser(input);

            log.debug({ response }, 'updateUser');

            return response;
        },
        deleteUser: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'deleteUser');

            const response = await dataSources.UsersAPI.deleteUser(input);

            log.debug({ response }, 'deleteUser');

            return response;
        }
    }
};
