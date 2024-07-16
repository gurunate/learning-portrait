import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import * as fixtures from '@/lib/fixtures';

const meta = {
    title: 'App / components / Students Dropdown',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const students = fixtures.students(5);

export const demo: Story = {
    args: {
        students
    }
};
