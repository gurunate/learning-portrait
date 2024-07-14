import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        students: [Student]!
    }

    extend type Mutation {
        addStudent(input: StudentInput!): Student!
        updateStudent(input: StudentInput!): Student!
        deleteStudent(input: StudentIdInput!): Student!
    }

    type Student {
        id: String
        prefix: String
        firstName: String
        lastName: String
        suffix: String
        avatar: String
        notes: String
        email: String
        userId: String
        updatedAt: String
        createdAt: String
        active: Boolean
    }

    input StudentIdInput {
        id: String!
    }

    input StudentInput {
        id: String
        prefix: String
        firstName: String
        lastName: String
        suffix: String
        avatar: String
        notes: String
        email: String
        active: Boolean
    }
`;
