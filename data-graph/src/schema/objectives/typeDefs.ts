import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        objectives: [Objective]!
    }

    type Objective {
        id: String
        courseId: String
        name: String
        updatedAt: String
        createdAt: String
        active: Boolean
    }
`;
