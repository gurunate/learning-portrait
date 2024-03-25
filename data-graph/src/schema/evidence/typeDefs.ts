import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        evidence: [Evidence]!
    }

    extend type Mutation {
        addEvidence(input: EvidenceInput!): Evidence!
        updateEvidence(input: EvidenceInput!): Evidence!
        deleteEvidence(input: EvidenceIdInput!): Evidence!
    }

    type Evidence {
        id: String
        objectiveId: String
        name: String
        updatedAt: String
        createdAt: String
        active: Boolean
    }

    input EvidenceIdInput {
        id: String!
    }

    input EvidenceInput {
        id: String
        objectiveId: String!
        name: String!
        active: Boolean
    }
`;
