import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import * as fixtures from '@/lib/fixtures';

const meta = {
    title: 'App / components / Objectives Dropdown',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const objectives = fixtures.objectives(12);
const students = fixtures.students(12);

const subObjectives = objectives.map(objective => {
    return {
        ...objective,
        subObjectives: fixtures.objectives(3),
        key: objective.id
    }
})


export const demo: Story = {
    args: {
        objectives: subObjectives,
    }
};
