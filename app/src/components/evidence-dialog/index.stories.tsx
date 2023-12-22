import type { Meta, StoryObj } from '@storybook/react';
import * as fixtures from '@/lib/fixtures';
import Component, { EvidenceDialogProps } from '.';
import React from 'react';
import { Button } from '@mui/material';
import { faker } from '@faker-js/faker';
import { format as formatDate } from 'date-fns';

const meta = {
    title: 'App / components / dialogs / Evidence',
    component: Component,
    argTypes: { onSubmit: { action: 'clicked' } }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const courses = fixtures.courses(3);
const objectives = fixtures.objectives(7);

const defaultArgs = {
    open: false,
    initialValue: '',
    objectives,
    courses,
    uploadedOn: formatDate(faker.date.past(), 'P'),
    devtool: false
};

export const base: Story = {
    args: {
        ...defaultArgs,
        open: true
    }
};

/**
 * @param {EvidenceDialogProps} props
 * @returns {JSX.Element}
 */
const Demo = ({ open: openProp, ...props }: EvidenceDialogProps) => {
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
                Add Evidence
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
