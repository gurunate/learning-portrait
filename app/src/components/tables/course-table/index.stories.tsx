import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';;
import { faker } from '@faker-js/faker';
import { objectives, students } from '@/lib/fixtures';
import { Objective as TObjective, Student as TStudent } from '@/types';
import { object } from 'yup';

const meta = {
    title: 'App / components / tables / Course',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const objs = objectives(12);
const studs = students(12);

studs.map(student => {
    return {
        ...student,
        ratings: objs.map(objective => {
            return {
                id: faker.string.uuid,
                objectiveId: objective.id,
                value: faker.helpers.arrayElement(['Mastery', 'Approaching', 'Not yet', 'Needs help']),
                warning: faker.helpers.arrayElement(['true', 'false']),
                error: faker.helpers.arrayElement(['true', 'false']),
            }
        })
    }
})

const overall = [{
    id: faker.string.uuid(),
    objectiveId: 'overall',
    name: 'overall',
    key: faker.helpers.arrayElement(['A+', 'A', 'A-', 'B+', 'C', 'D', 'F']),
}, ...objs]


export const demo: Story = {
    args: {
        course: {
            id: faker.string.uuid(),
            name: faker.lorem.words(),
            description: faker.lorem.sentence(),
        },
        students: studs,
        objectives: objs,
    }
};

export const OverallGradeDemo: Story = {
    args: {
        course: {
            id: faker.string.uuid(),
            name: faker.lorem.words(),
            description: faker.lorem.sentence(),
        },
        students: studs,
        objectives: overall,
    }
};


const subObjectives = objs.map(obj => {
    return {
        ...obj,
        subObjectives: objectives(3),
        key: obj.id
    }
})

export const SubObjectiveDemo: Story = {
    args: {
        course: {
            id: faker.string.uuid(),
            name: faker.lorem.words(),
            description: faker.lorem.sentence(),
        },
        students: studs,
        objectives: subObjectives,
        hasSubObjectives: true,
    }
};
