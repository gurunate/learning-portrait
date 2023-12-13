import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { faker } from '@faker-js/faker';

const meta = {
    title: 'App / components / tables / Students',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const students = [
    {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email()
    }
];

export const Students: Story = {
    args: { students }
};
