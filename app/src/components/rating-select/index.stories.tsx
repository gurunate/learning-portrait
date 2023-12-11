import type { Meta, StoryObj } from '@storybook/react';

import Component, { options as componentOptions, RatingSelectProps } from '.';
import React from 'react';
import { SelectChangeEvent } from '@mui/material';

const options = componentOptions.map(({ key }) => key);
const labels = componentOptions.reduce(
    (acc, { key, label }) => ({
        ...acc,
        [key || '']: key ? `${key} - ${label}` : label
    }),
    {}
);

const meta = {
    title: 'App / components / menu / Rating',
    component: Component,
    argTypes: {
        value: {
            options,
            control: {
                type: 'select',
                labels
            }
        },
        defaultValue: {
            options,
            control: {
                type: 'select',
                labels
            }
        }
    }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {
    args: {
        defaultValue: options[0],
        error: false,
        warning: false,
        defaultOpen: true
    }
};

const Demo = (props: RatingSelectProps) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setValue(event.target.value as string);
    };

    return <Component {...props} value={value} onChange={handleChange} />;
};

export const demo: Story = {
    args: {
        defaultValue: '',
        error: false,
        warning: false
    },
    render: args => <Demo {...args} />
};
