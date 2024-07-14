import { jwtDecode } from 'jwt-decode';
import log from '../../lib/logger/server';

/**
 *
 */
export const resolvers = {
    Query: {
        instructors: async (
            _: any,
            { input }: any,
            { dataSources, token }: any
        ): Promise<unknown> => {
            log.debug({ input, token }, 'instructors query');

            const decoded = jwtDecode(token);

            log.debug({ decoded }, 'instructors query');

            const data = await dataSources.InstructorsAPI.getInstructors(input);

            return data;
        }
    },
    Mutation: {
        addInstructor: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'addInstructor');

            const response = await dataSources.InstructorsAPI.createInstructor(
                input
            );

            log.debug({ response }, 'addInstructor');

            return response;
        },
        updateInstructor: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'updateInstructor');

            const response = await dataSources.InstructorsAPI.updateInstructor(
                input
            );

            log.debug({ response }, 'updateInstructor');

            return response;
        },
        deleteInstructor: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'deleteInstructor');

            const response = await dataSources.InstructorsAPI.deleteInstructor(
                input
            );

            log.debug({ response }, 'deleteInstructor');

            return response;
        }
    }
};
