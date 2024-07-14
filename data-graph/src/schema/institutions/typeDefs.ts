import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        institutions: [Institution]!
    }

    extend type Mutation {
        addInstitution(input: InstitutionInput!): Institution!
        updateInstitution(input: InstitutionInput!): Institution!
        deleteInstitution(input: InstitutionIdInput!): Institution!
    }

    type Institution {
        id: String
        name: String
        description: String
        updatedAt: String
        createdAt: String
        active: Boolean
    }

    input InstitutionIdInput {
        id: String!
    }

    input InstitutionInput {
        id: String
        name: String!
        active: Boolean
    }
`;
