import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { faker } from '@faker-js/faker';
import { startCase, upperCase } from 'lodash';

const meta = {
    title: 'App / components / tables / Objectives',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const objectives = [
    {
        id: faker.string.uuid(),
        name: startCase(faker.word.adjective()),
        key: upperCase(faker.word.adjective().substring(0, 3)),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        name: startCase(faker.word.adjective()),
        key: upperCase(faker.word.adjective().substring(0, 3)),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        name: startCase(faker.word.adjective()),
        key: upperCase(faker.word.adjective().substring(0, 3)),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        name: startCase(faker.word.adjective()),
        key: upperCase(faker.word.adjective().substring(0, 3)),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        name: startCase(faker.word.adjective()),
        key: upperCase(faker.word.adjective().substring(0, 3)),
        description: faker.lorem.sentence()
    }
];

export const Objectives: Story = {
    args: {
        objectives
    }
};
