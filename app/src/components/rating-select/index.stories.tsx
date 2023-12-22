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
    title: 'App / components / select / Rating',
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

const defaultArgs = {
    // defaultValue: '',
    error: false,
    warning: false,
    extended: false
};

export const base: Story = {
    args: {
        ...defaultArgs,
        // defaultValue: options[0],
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
        ...defaultArgs
    },
    render: args => <Demo {...args} />
};

export const full: Story = {
    args: {
        ...defaultArgs,
        extended: true
    },
    render: args => <Demo {...args} />
};
