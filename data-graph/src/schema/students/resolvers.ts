import { jwtDecode } from 'jwt-decode';
import log from '../../lib/logger/server';

/**
 *
 */
export const resolvers = {
    Query: {
        students: async (
            _: any,
            { input }: any,
            { dataSources, token }: any
        ): Promise<unknown> => {
            log.debug({ input, token }, 'students query');

            const decoded = jwtDecode(token);

            log.debug({ decoded }, 'students query');

            const data = await dataSources.StudentsAPI.getStudents(input);

            return data;
        }
    },
    Mutation: {
        addStudent: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'addStudent');

            const response = await dataSources.StudentsAPI.createStudent(input);

            log.debug({ response }, 'addStudent');

            return response;
        },
        updateStudent: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'updateStudent');

            const response = await dataSources.StudentsAPI.updateStudent(input);

            log.debug({ response }, 'updateStudent');

            return response;
        },
        deleteStudent: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'deleteStudent');

            const response = await dataSources.StudentsAPI.deleteStudent(input);

            log.debug({ response }, 'deleteStudent');

            return response;
        }
    }
};
