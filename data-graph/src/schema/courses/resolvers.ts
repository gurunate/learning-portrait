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
    }
};
