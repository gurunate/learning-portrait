import * as courses from './courses';
import * as evidence from './evidence';
import * as objectives from './objectives';
import * as users from './users';

import { gql } from 'graphql-tag';

const typeDef = gql`
    # scalar JSON
    # scalar JSONObject
    type Query
    type Mutation
    # type Subscription
`;

export const typeDefs = [
    typeDef,
    courses.typeDefs,
    evidence.typeDefs,
    objectives.typeDefs,
    users.typeDefs
];

export const resolvers = [
    courses.resolvers,
    evidence.resolvers,
    objectives.resolvers,
    users.resolvers
];

export const dataSources = options => ({
    CoursesAPI: new courses.DataSource(options),
    EvidenceAPI: new evidence.DataSource(options),
    ObjectivesAPI: new objectives.DataSource(options),
    UsersAPI: new users.DataSource(options)
});
