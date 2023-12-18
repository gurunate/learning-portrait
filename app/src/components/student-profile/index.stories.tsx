import type { Meta, StoryObj } from '@storybook/react';
import * as fixtures from '@/lib/fixtures';

import Component from '.';

const meta = {
    title: 'App / components / Student Profile',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const courses = fixtures.courses(1);
const student = fixtures.student();

export const StudentProfile: Story = {
    args: { courses, student }
};
