import * as courses from './courses';
import * as evidence from './evidence';
import * as institutions from './institutions';
import * as objectives from './objectives';
import * as organizations from './organizations';
import * as sections from './sections';
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
    institutions.typeDefs,
    objectives.typeDefs,
    organizations.typeDefs,
    sections.typeDefs,
    users.typeDefs
];

export const resolvers = [
    courses.resolvers,
    evidence.resolvers,
    institutions.resolvers,
    objectives.resolvers,
    organizations.resolvers,
    sections.resolvers,
    users.resolvers
];

export const dataSources = options => ({
    CoursesAPI: new courses.DataSource(options),
    EvidenceAPI: new evidence.DataSource(options),
    InstitutionsAPI: new institutions.DataSource(options),
    ObjectivesAPI: new objectives.DataSource(options),
    OrganizationsAPI: new organizations.DataSource(options),
    SectionsAPI: new sections.DataSource(options),
    UsersAPI: new users.DataSource(options)
});
