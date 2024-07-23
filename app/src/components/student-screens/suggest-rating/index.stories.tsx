import type { Meta, StoryObj } from '@storybook/react';
import Component, {SuggestRatingDialogProps } from '.';
import React from 'react';
import { Button } from '@mui/material';
import { faker } from '@faker-js/faker';

const meta = {
    title: 'App / components / student screens / Suggest Rating',
    component: Component,
    argTypes: { onSubmit: { action: 'onSubmit' } }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;


const defaultArgs = {
    open: false,
    initialValue: '',
    devtool: false
};

/**
 * @param {SuggestRatingDialogProps} props
 * @returns {JSX.Element}
 */
const Demo = ({
    open: openProp,
    ...props
}: SuggestRatingDialogProps): JSX.Element => {
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
                Suggest New Rating
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
