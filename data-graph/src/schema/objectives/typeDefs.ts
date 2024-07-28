import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        objectives: [Objective]!
    }

    extend type Mutation {
        addObjective(input: ObjectiveInput!): Objective!
        updateObjective(input: ObjectiveInput!): Objective!
        deleteObjective(input: ObjectiveIdInput!): Objective!
    }

    type Objective {
        id: String
        courseId: String
        parentId: String
        name: String
        updatedAt: String
        createdAt: String
        active: Boolean
        children: [Objective]
    }

    input ObjectiveIdInput {
        id: String!
    }

    input ObjectiveInput {
        id: String
        courseId: String!
        parentId: String
        name: String!
        active: Boolean
        children: [ObjectiveInput]
    }
`;
