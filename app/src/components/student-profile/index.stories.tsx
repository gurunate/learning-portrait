import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
    title: 'App / components / Student Profile',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const courses = [{ id: '1234', name: 'Pre Calculus Adv' }];

export const StudentProfile: Story = {
    args: { courses }
};
