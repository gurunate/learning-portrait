import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        users: [User]!
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
`;
