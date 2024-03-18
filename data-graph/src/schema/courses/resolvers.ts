export const resolvers = {
    Query: {
        courses: async (
            _: any,
            { input }: any,
            { dataSources }: any
        ): Promise<unknown> => {
            // TODO add trace logging
            console.log('courses resolver', {});

            const data = await dataSources.CoursesAPI.getCourses(input);

            return data;
        }
    },
    Course: {
        objectives: async (parent, _, { dataSources }) => {
            // TODO add trace logging
            const data = await dataSources.ObjectivesAPI.getObjectives({
                courseId: parent.id
            });

            return data;
        }
    }
};
