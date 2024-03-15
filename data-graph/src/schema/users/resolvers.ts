export const resolvers = {
    Query: {
        users: async (
            _: any,
            { input }: any,
            { dataSources }: any
        ): Promise<unknown> => {
            // TODO add trace logging

            const data = await dataSources.UsersAPI.getUsers(input);

            return data;
        }
    }
};
