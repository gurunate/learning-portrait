import type { Meta, StoryObj } from '@storybook/react';
import * as fixtures from '@/lib/fixtures';
import Component from '.';

const meta = {
    title: 'App / components / layouts / Masonry Grid',
    component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const notes = fixtures.notes(7);

export const Demo: Story = {
    args: { columns: 3, notes: notes },
};
