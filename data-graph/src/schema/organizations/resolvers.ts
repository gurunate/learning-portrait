import { jwtDecode } from 'jwt-decode';
import log from '../../lib/logger/server';

/**
 *
 */
export const resolvers = {
    Query: {
        organizations: async (
            _: any,
            { input }: any,
            { dataSources, token }: any
        ): Promise<unknown> => {
            log.debug({ input, token }, 'organizations query');

            const decoded = jwtDecode(token);

            log.debug({ decoded }, 'organizations query');

            const data = await dataSources.OrganizationsAPI.getOrganizations(
                input
            );

            return data;
        }
    },
    Mutation: {
        addOrganization: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'addOrganization');

            const response =
                await dataSources.OrganizationsAPI.createOrganization(input);

            log.debug({ response }, 'addOrganization');

            return response;
        },
        updateOrganization: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'updateOrganization');

            const response =
                await dataSources.OrganizationsAPI.updateOrganization(input);

            log.debug({ response }, 'updateOrganization');

            return response;
        },
        deleteOrganization: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'deleteOrganization');

            const response =
                await dataSources.OrganizationsAPI.deleteOrganization(input);

            log.debug({ response }, 'deleteOrganization');

            return response;
        }
    }
    // Organization: {
    //     objectives: async (
    //         parent: { id: any },
    //         _: any,
    //         { dataSources }: any
    //     ) => {
    //         log.debug({ parent }, 'course objectives query');

    //         const data = await dataSources.ObjectivesAPI.getObjectives({
    //             courseId: parent.id
    //         });

    //         return data;
    //     },
    //     sections: async (parent: { id: any }, _: any, { dataSources }: any) => {
    //         log.debug({ parent }, 'course objectives query');

    //         const data = await dataSources.SectionsAPI.getSections({
    //             courseId: parent.id
    //         });

    //         return data;
    //     }
    // }
};
