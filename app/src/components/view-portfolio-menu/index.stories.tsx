import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import { Button, Menu } from '@mui/material';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const meta = {
    title: 'App / components / menus / View Portfolio',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const base: Story = {
    args: {}
};

const Demo = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                variant="outlined"
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                endIcon={open ? <ArrowRightIcon /> : <ArrowDropDownIcon />}
            >
                Options
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
            >
                <Component />
            </Menu>
        </div>
    );
};

export const demo: Story = {
    render: args => <Demo {...args} />
};
