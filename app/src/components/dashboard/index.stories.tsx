import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { faker } from '@faker-js/faker';
import { startCase } from 'lodash';

const meta = {
    title: 'App / components / Dashboard',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const courses = [
    { id: faker.string.uuid(), name: 'Pre Calculus Adv' },
    { id: faker.string.uuid(), name: faker.lorem.sentence() },
    { id: faker.string.uuid(), name: faker.lorem.sentence() }
];

const students = [
    {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email()
    }
];

const objectives = [
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    }
];

export const Dashboard: Story = {
    args: {
        courses,
        objectives,
        students
    }
};
