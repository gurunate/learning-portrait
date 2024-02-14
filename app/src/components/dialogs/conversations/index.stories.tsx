import type { Meta, StoryObj } from '@storybook/react';
import Component, { ConversationsDialogProps } from '.';
import React from 'react';
import { Button, Typography } from '@mui/material';

const meta = {
    title: 'App / components / dialogs / Conversations',
    component: Component,
    tags: ['autodocs'],
    argTypes: { onSend: { action: 'onSend' } }
} satisfies Meta<typeof Component>;
import * as fixtures from '@/lib/fixtures';

export default meta;
type Story = StoryObj<typeof meta>;

const courses = fixtures.courses(3);
const student = fixtures.student();
const messages = fixtures.messages(13, {
    recipient: student,
    sender: fixtures.user()
});

messages.sort(
    (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
);

const defaultArgs = {
    open: false,
    devtool: false,
    course: courses[0],
    courses,
    student,
    messages
};

/**
 * @param {ConversationsDialogProps} props
 * @returns {JSX.Element}
 */
const Demo = ({
    open: openProp,
    ...props
}: ConversationsDialogProps): JSX.Element => {
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
            <Typography paragraph>Press button to demo</Typography>
            <Button variant="contained" onClick={handleClick}>
                Message Student
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
