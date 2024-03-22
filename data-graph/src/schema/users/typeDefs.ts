import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        users: [User]!
    }

    extend type Mutation {
        addUser(input: UserInput!): User!
        updateUser(input: UserInput!): User!
        deleteUser(input: UserIdInput!): User!
    }

    type User {
        id: String
        email: String
        firstName: String
        lastName: String
        hash: String
        verified: Boolean
        locked: Boolean
        attempts: Int
        requestToken: String
        updatedAt: String
        createdAt: String
        active: Boolean
        roles: [String]
    }

    input UserIdInput {
        id: String!
    }

    input UserInput {
        id: String
        email: String
        firstName: String!
        lastName: String!
        verified: Boolean
        locked: Boolean
        active: Boolean
        roles: [String]
    }
`;
