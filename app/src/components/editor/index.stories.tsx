import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { Box } from '@mui/material';
import { faker } from '@faker-js/faker';

const meta = {
    title: 'App / components / Editor',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Editor: Story = {
    args: {
        defaultValue: faker.lorem.sentence()
    },
    render: args => (
        <Box height={500}>
            <Component {...args} />
        </Box>
    )
};
