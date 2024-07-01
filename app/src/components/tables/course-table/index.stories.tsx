import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';;
import { faker } from '@faker-js/faker';
import { objectives, students } from '@/lib/fixtures';
import { Objective as TObjective, Student as TStudent } from '@/types';

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
