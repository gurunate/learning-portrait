import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { Box, Paper } from '@mui/material';

const meta = {
    title: 'App / components / Marketing Panel',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MarketingPanel: Story = {
    args: {},
    render: args => (
        <Paper sx={{ backgroundColor: 'background.primary' }}>
            <Box p={4}>
                <Component {...args} />
            </Box>
        </Paper>
    )
};
