import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';

const meta = {
    title: 'App / components / icons / Facebook',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const medium: Story = {
    args: {}
};

export const small: Story = {
    args: { fontSize: 'small' }
};

export const large: Story = {
    args: { fontSize: 'large' }
};

export const fontSize: Story = {
    args: { sx: { fontSize: 200 } }
};
