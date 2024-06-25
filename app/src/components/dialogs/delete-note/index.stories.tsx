import type { Meta, StoryObj } from '@storybook/react';
import Component, { DeleteNoteProps } from '.';
import React from 'react';
import { Button } from '@mui/material';

const meta = {
    title: 'App / components / dialogs / Delete Note',
    component: Component,
    args: {
        open: false,
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * @param {DeleteNoteProps} props
 * @returns {JSX.Element}
 */
const Demo = ({
    open: openProp,
    ...props
}: DeleteNoteProps): JSX.Element => {
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
                Delete Note
            </Button>
            <Component {...props} open={open} handleClose={handleClose} />
        </>
    );
};

export const demo: Story = {
    render: args => <Demo {...args} />
};
