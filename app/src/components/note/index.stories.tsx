import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';
import { faker } from '@faker-js/faker';
import { options } from 'numeral';

const meta = {
    title: 'App / components / Note',
    tags: ['autodocs'],
    component: Component,
    argTypes: {
        note: {
            description: 'Body of note',
            control: { type: 'text'}
        },
        dateCreated: {
            description: 'Date note was created',
            control: { type: 'date'},
        },
        onDelete: {
            description: 'Function to handle deleting the note.',
        },
        onEdit: {
            description: 'Function to handle editing the note.',
        },
        username: { 
            description: 'user name to display',
            control: { type: 'text' }
        },
        role: {
            description: 'role of user',
            control: {type: 'select', options: ['teacher', 'student']},
        }
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    args: { 
        note: faker.lorem.lines(5),
        dateCreated: new Date(),
        username: faker.person.fullName(),
        role: faker.helpers.arrayElement(['teacher', 'student']),
    }
};
