import { jwtDecode } from 'jwt-decode';
import log from '../../lib/logger/server';

export const resolvers = {
    Query: {
        institutions: async (
            _: any,
            { input }: any,
            { dataSources, token }: any
        ): Promise<unknown> => {
            log.debug({ input, token }, 'institutions query');

            const decoded = jwtDecode(token);

            log.debug({ decoded }, 'institutions query');

            const data = await dataSources.InstitutionsAPI.getInstitutions(
                input
            );

            return data;
        }
    },
    Mutation: {
        addInstitution: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'addInstitution');

            const response =
                await dataSources.InstitutionsAPI.createInstitution(input);

            log.debug({ response }, 'addInstitution');

            return response;
        },
        updateInstitution: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'updateInstitution');

            const response =
                await dataSources.InstitutionsAPI.updateInstitution(input);

            log.debug({ response }, 'updateInstitution');

            return response;
        },
        deleteInstitution: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'deleteInstitution');

            const response =
                await dataSources.InstitutionsAPI.deleteInstitution(input);

            log.debug({ response }, 'deleteInstitution');

            return response;
        }
    }
};
