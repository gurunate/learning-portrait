import { jwtDecode } from 'jwt-decode';
import log from '../../lib/logger/server';

export const resolvers = {
    Query: {
        courses: async (
            _: any,
            { input }: any,
            { dataSources, token }: any
        ): Promise<unknown> => {
            log.debug({ input, token }, 'courses query');

            const decoded = jwtDecode(token);

            log.debug({ decoded }, 'courses query');

            const data = await dataSources.CoursesAPI.getCourses(input);

            return data;
        }
    },
    Mutation: {
        addCourse: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'addCourse');

            const response = await dataSources.CoursesAPI.createCourse(input);

            log.debug({ response }, 'addCourse');

            return response;
        },
        updateCourse: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'updateCourse');

            const response = await dataSources.CoursesAPI.updateCourse(input);

            log.debug({ response }, 'updateCourse');

            return response;
        },
        deleteCourse: async (
            _parent: any,
            { input }: any,
            { dataSources }: any
        ) => {
            log.debug({ input }, 'deleteCourse');

            const response = await dataSources.CoursesAPI.deleteCourse(input);

            log.debug({ response }, 'deleteCourse');

            return response;
        }
    },
    Course: {
        objectives: async (
            parent: { id: any },
            _: any,
            { dataSources }: any
        ) => {
            log.debug({ parent }, 'course objectives query');

            const data = await dataSources.ObjectivesAPI.getObjectives({
                courseId: parent.id
            });

            return data;
        }
    }
};
