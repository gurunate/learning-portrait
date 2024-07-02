import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const meta = {
    title: 'App / components / Rating',
    tags: ['autodocs'],
    component: Component,
    argTypes: {
        color: {
            control: {
                type: 'select',
            },
            options: ['info', 'warning', 'error', 'success'],
        },
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium'],
        },
        variant: {
            control: {
                type: 'select',
            },
            options: ['filled', 'outlined'],
        },
        underRated: {
            description: 'A down arrow indicates that student rating is lower than the teacher rating',
        },
        overRated: {
            description: 'Arrow going up indicates that student rating is higher than the teacher rating',
        }
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Mastery: Story = {
    args: { label: 'Mastery', size: 'medium', overRated: false, underRated: false, variant: 'filled', color: 'success' },
};

export const Approaching: Story = {
    args: { label: 'Approaching', size: 'medium', overRated: false, underRated: false, variant: 'filled', color: 'info' },
};

export const NotYet: Story = {
    args: { label: 'Not yet', size: 'medium', overRated: false, underRated: false, variant: 'filled', color: 'warning' },
};

export const NeedsHelp: Story = {
    args: { label: 'Needs Help', size: 'medium', overRated: false, underRated: false, variant: 'filled', color: 'error' },
};
