import type { Meta, StoryObj } from '@storybook/react';
import Component, { ApplyObjectiveDialogProps } from '.';
import React from 'react';
import { Button } from '@mui/material';
import * as fixtures from '@/lib/fixtures';
import { faker } from '@faker-js/faker';

const meta = {
    title: 'App / components / dialogs / Apply Objective',
    component: Component,
    argTypes: {
        onClose: { action: 'closed' },
        onSearch: { action: 'searched' },
        onSubmit: { action: 'submitted' }
    }
} satisfies Meta<typeof Component>;

const courses = fixtures.courses(faker.number.int({ min: 1, max: 7 }));

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
    open: false,
    devtool: false,
    courses
};

export const base: Story = {
    args: {
        ...defaultArgs,
        open: true
    }
};

/**
 * @param {ApplyObjectiveDialogProps} props
 * @returns {JSX.Element}
 */
const Demo = ({ open: openProp, ...props }: ApplyObjectiveDialogProps) => {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        setOpen(openProp);
    }, [openProp]);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" onClick={handleClick}>
                Apply Objective
            </Button>
            <Component {...props} open={open} onClose={handleClose} />
        </>
    );
};

export const demo: Story = {
    args: {
        ...defaultArgs
    },
    render: args => <Demo {...args} />
};
