import type { Meta, StoryObj } from '@storybook/react';
import * as fixtures from '@/lib/fixtures';

import Component from '.';

const meta = {
    title: 'App / components / Course Setup',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const courses = fixtures.courses(3);
const objectives = fixtures.objectives(5);

export const CourseSetup: Story = {
    args: {
        courses,
        objectives
    }
};
