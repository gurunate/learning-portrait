import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import * as fixtures from '@/lib/fixtures';

const meta = {
    title: 'App / components / tables / Students',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const objectives = fixtures.objectives(5);
const students = fixtures.students(9);

students[2].firstName = 'Anna';
students[2].lastName = 'Lacey';
students[2].avatar = '/avatars/2185184f-ffa9-48f2-8611-9893de06e4f6.svg';

export const Students: Story = {
    args: { objectives, students }
};
