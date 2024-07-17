import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        instructors: [Instructor]!
    }

    extend type Mutation {
        addInstructor(input: InstructorInput!): Instructor!
        updateInstructor(input: InstructorInput!): Instructor!
        deleteInstructor(input: InstructorIdInput!): Instructor!
    }

    type Instructor {
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

    input InstructorIdInput {
        id: String!
    }

    input InstructorInput {
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
