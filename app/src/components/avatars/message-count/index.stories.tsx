import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { faker } from '@faker-js/faker';

const meta = {
    title: 'App / components / avatars / Message Count',
    tags: ['autodocs'],
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MessageCount: Story = {
    args: { total: faker.number.int({ min: 1, max: 7 }) }
};
