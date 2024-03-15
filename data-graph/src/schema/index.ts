import * as books from './books';
import * as courses from './courses';
import * as users from './users';

import { gql } from 'graphql-tag';

const typeDef = gql`
    # scalar JSON
    # scalar JSONObject
    type Query
    # type Mutation     // TODO add when adding first mutation
    # type Subscription
`;

export const typeDefs = [
    typeDef,
    books.typeDefs,
    courses.typeDefs,
    users.typeDefs
];

export const resolvers = [books.resolvers, courses.resolvers, users.resolvers];

export const dataSources = options => ({
    CoursesAPI: new courses.DataSource(options),
    UsersAPI: new users.DataSource(options)
});
