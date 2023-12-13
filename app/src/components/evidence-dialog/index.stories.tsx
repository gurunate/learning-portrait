import type { Meta, StoryObj } from '@storybook/react';

import Component, { EvidenceDialogProps } from '.';
import React from 'react';
import { Button } from '@mui/material';
import { faker } from '@faker-js/faker';
import { startCase } from 'lodash';
import { format as formatDate } from 'date-fns';

const meta = {
    title: 'App / components / dialogs / Evidence',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

const objectives = [
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    },
    {
        id: faker.string.uuid(),
        key: 'OBJ',
        name: startCase(faker.word.adjective()),
        description: faker.lorem.sentence()
    }
];

const courses = [
    { id: faker.string.uuid(), name: 'Pre Calculus Adv' },
    { id: faker.string.uuid(), name: faker.lorem.sentence() },
    { id: faker.string.uuid(), name: faker.lorem.sentence() }
];

const defaultArgs = {
    open: false,
    initialValue: '',
    objectives,
    courses,
    uploadedOn: formatDate(faker.date.past(), 'P')
};

export const base: Story = {
    args: {
        ...defaultArgs,
        open: true
    }
};

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
