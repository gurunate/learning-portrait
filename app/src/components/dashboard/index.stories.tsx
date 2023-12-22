import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import * as fixtures from '@/lib/fixtures';

const meta = {
    title: 'App / components / Dashboard',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const courses = fixtures.courses(3);
const objectives = fixtures.objectives(5);
const students = fixtures.students(7);

export const Dashboard: Story = {
    args: {
        courses,
        objectives,
        students
    }
};
