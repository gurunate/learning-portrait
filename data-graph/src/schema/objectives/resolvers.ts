import log from '../../lib/logger/server';

export const resolvers = {
    Query: {
        objectives: async (
            _: any,
            { input }: any,
            { dataSources }: any
        ): Promise<unknown> => {
            // TODO add trace logging
            log.debug({ input }, 'objectives resolver');

            const data = await dataSources.ObjectivesAPI.getObjectives(input);

            return data;
        }
    }
};
