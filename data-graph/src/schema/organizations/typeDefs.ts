import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        organizations: [Organization]!
    }

    extend type Mutation {
        addOrganization(input: OrganizationInput!): Organization!
        updateOrganization(input: OrganizationInput!): Organization!
        deleteOrganization(input: OrganizationIdInput!): Organization!
    }

    type Organization {
        id: String
        name: String
        description: String
        updatedAt: String
        createdAt: String
        active: Boolean
        # objectives: [Objective]
    }

    input OrganizationIdInput {
        id: String!
    }

    input OrganizationInput {
        id: String
        name: String!
        active: Boolean
    }
`;
