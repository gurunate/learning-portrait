import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import * as fixtures from '@/lib/fixtures';

const meta = {
    title: 'App / components / Greeting',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const student = fixtures.student();

export const demo: Story = {
    args: {
        name: student.firstName
    }
};
