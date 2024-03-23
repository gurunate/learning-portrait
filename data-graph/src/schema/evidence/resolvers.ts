import log from '../../lib/logger/server';

export const resolvers = {
    Query: {
        evidence: async (
            _: any,
            { input }: any,
            { dataSources }: any
        ): Promise<unknown> => {
            log.debug({ input }, 'evidence query');

            const data = await dataSources.EvidenceAPI.getEvidence(input);

            return data;
        }
    },
    Mutation: {
        addEvidence: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'addEvidence');

            const response = await dataSources.EvidenceAPI.createEvidence(
                input
            );

            log.debug({ response }, 'addEvidence');

            return response;
        },
        updateEvidence: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'updateEvidence');

            const response = await dataSources.EvidenceAPI.updateEvidence(
                input
            );

            log.debug({ response }, 'updateEvidence');

            return response;
        },
        deleteEvidence: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'deleteEvidence');

            const response = await dataSources.EvidenceAPI.deleteEvidence(
                input
            );

            log.debug({ response }, 'deleteEvidence');

            return response;
        }
    }
};
