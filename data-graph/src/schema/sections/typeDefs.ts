import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        sections: [Section]!
    }

    extend type Mutation {
        addSection(input: SectionInput!): Section!
        updateSection(input: SectionInput!): Section!
        deleteSection(input: SectionIdInput!): Section!
    }

    type Section {
        id: String
        name: String
        description: String
        updatedAt: String
        createdAt: String
        active: Boolean
    }

    input SectionIdInput {
        id: String!
    }

    input SectionInput {
        id: String
        name: String!
        active: Boolean
    }
`;
