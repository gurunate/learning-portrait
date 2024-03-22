import log from '../../lib/logger/server';

export const resolvers = {
    Query: {
        courses: async (
            _: any,
            { input }: any,
            { dataSources }: any
        ): Promise<unknown> => {
            log.debug({ input }, 'courses query');

            const data = await dataSources.CoursesAPI.getCourses(input);

            return data;
        }
    },
    Course: {
        objectives: async (
            parent: { id: any },
            _: any,
            { dataSources }: any
        ) => {
            log.debug({ parent }, 'objectives chaining');

            const data = await dataSources.ObjectivesAPI.getObjectives({
                courseId: parent.id
            });

            return data;
        }
    }
};
