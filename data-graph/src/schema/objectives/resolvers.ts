import log from '../../lib/logger/server';

export const resolvers = {
    Query: {
        objectives: async (
            _: any,
            { input }: any,
            { dataSources }: any
        ): Promise<unknown> => {
            log.debug({ input }, 'objectives query');

            const data = await dataSources.ObjectivesAPI.getObjectives(input);

            return data;
        }
    },
    Mutation: {
        addObjective: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'addObjective');

            const response = await dataSources.ObjectivesAPI.createObjective(
                input
            );

            log.debug({ response }, 'addObjective');

            return response;
        },
        updateObjective: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'updateObjective');

            const response = await dataSources.ObjectivesAPI.updateObjective(
                input
            );

            log.debug({ response }, 'updateObjective');

            return response;
        },
        deleteObjective: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'deleteObjective');

            const response = await dataSources.ObjectivesAPI.deleteObjective(
                input
            );

            log.debug({ response }, 'deleteObjective');

            return response;
        }
    }
};
