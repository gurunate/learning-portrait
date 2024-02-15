import type { Meta, StoryObj } from '@storybook/react';
import Component, { ObjectiveDialogProps } from '.';
import React from 'react';
import { Button } from '@mui/material';
import { faker } from '@faker-js/faker';

const meta = {
    title: 'App / components / dialogs / Objective',
    component: Component,
    tags: ['autodocs'],
    argTypes: { onSubmit: { action: 'clicked' } }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
    open: false,
    initialValue: '',
    placeholder:
        'Enter what the areas that will be covered and/or what mastery looks like, etc.',
    devtool: false
};

/**
 * @param {ObjectiveDialogProps} props
 * @returns {JSX.Element}
 */
const Demo = ({
    open: openProp,
    ...props
}: ObjectiveDialogProps): JSX.Element => {
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
                Add Objective
            </Button>
            <Component {...props} open={open} onClose={handleClose} />
        </>
    );
};

export const demo: Story = {
    args: {
        ...defaultArgs,
        initialValue: faker.lorem.sentence()
    },
    render: args => <Demo {...args} />
};
