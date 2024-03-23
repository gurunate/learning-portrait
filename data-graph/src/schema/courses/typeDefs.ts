import { gql } from 'graphql-tag';

export const typeDefs = gql`
    extend type Query {
        courses: [Course]!
    }

    extend type Mutation {
        addCourse(input: CourseInput!): Course!
        updateCourse(input: CourseInput!): Course!
        deleteCourse(input: CourseIdInput!): Course!
    }

    type Course {
        id: String
        name: String
        updatedAt: String
        createdAt: String
        active: Boolean
        objectives: [Objective]
    }

    input CourseIdInput {
        id: String!
    }

    input CourseInput {
        id: String
        name: String!
        active: Boolean
    }
`;
