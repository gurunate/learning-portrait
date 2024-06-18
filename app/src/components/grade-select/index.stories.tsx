import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';

const meta = {
    title: 'App / components / select / grade',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const demo: Story = {
    args: {
        value: '',
        onChange: (event) => {
            console.log(event);
        }
    }
};
