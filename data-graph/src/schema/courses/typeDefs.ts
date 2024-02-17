import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        courses: [Course]!
    }

    type Course {
        id: String
        name: String
        updatedAt: String
        createdAt: String
        active: Boolean
    }
`;
