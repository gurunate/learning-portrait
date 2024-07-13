import { jwtDecode } from 'jwt-decode';
import log from '../../lib/logger/server';

export const resolvers = {
    Query: {
        sections: async (
            _: any,
            { input }: any,
            { dataSources, token }: any
        ): Promise<unknown> => {
            log.debug({ input, token }, 'sections query');

            const decoded = jwtDecode(token);

            log.debug({ decoded }, 'sections query');

            const data = await dataSources.SectionsAPI.getSections(input);

            return data;
        }
    },
    Mutation: {
        addSection: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'addSection');

            const response = await dataSources.SectionsAPI.createSection(input);

            log.debug({ response }, 'addSection');

            return response;
        },
        updateSection: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'updateSection');

            const response = await dataSources.SectionsAPI.updateSection(input);

            log.debug({ response }, 'updateSection');

            return response;
        },
        deleteSection: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'deleteSection');

            const response = await dataSources.SectionsAPI.deleteSection(input);

            log.debug({ response }, 'deleteSection');

            return response;
        }
    }
};
