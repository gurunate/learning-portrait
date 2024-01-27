import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
    title: 'App / components / cards / Sign In',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
    error: '',
    loading: false
};

export const demo: Story = {
    args: { ...defaultArgs }
};

export const loading: Story = {
    args: { ...defaultArgs, loading: true }
};

export const error: Story = {
    args: { ...defaultArgs, error: 'Incorrect email address or password.' }
};
