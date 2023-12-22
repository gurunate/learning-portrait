import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { faker } from '@faker-js/faker';

const meta = {
    title: 'App / components / cards / Sign In',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SignIn: Story = {
    args: {}
};
