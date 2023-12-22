import type { Meta, StoryObj } from '@storybook/react';
import * as fixtures from '@/lib/fixtures';

import Component from '.';

const meta = {
    title: 'App / components / cards / Student ',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const student = fixtures.student();

export const Student: Story = {
    args: {
        student
    }
};
