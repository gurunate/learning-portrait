import * as courses from './courses';
import * as evidence from './evidence';
import * as institutions from './institutions';
import * as instructors from './instructors';
import * as objectives from './objectives';
import * as organizations from './organizations';
import * as sections from './sections';
import * as students from './students';
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
    instructors.typeDefs,
    objectives.typeDefs,
    organizations.typeDefs,
    sections.typeDefs,
    students.typeDefs,
    users.typeDefs
];

export const resolvers = [
    courses.resolvers,
    evidence.resolvers,
    institutions.resolvers,
    instructors.resolvers,
    objectives.resolvers,
    organizations.resolvers,
    sections.resolvers,
    students.resolvers,
    users.resolvers
];

export const dataSources = options => ({
    CoursesAPI: new courses.DataSource(options),
    EvidenceAPI: new evidence.DataSource(options),
    InstitutionsAPI: new institutions.DataSource(options),
    InstructorsAPI: new instructors.DataSource(options),
    ObjectivesAPI: new objectives.DataSource(options),
    OrganizationsAPI: new organizations.DataSource(options),
    SectionsAPI: new sections.DataSource(options),
    StudentsAPI: new students.DataSource(options),
    UsersAPI: new users.DataSource(options)
});
