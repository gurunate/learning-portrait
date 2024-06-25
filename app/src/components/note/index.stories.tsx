import type { Meta, StoryObj } from '@storybook/react';
import Component from '.';
import { faker } from '@faker-js/faker';

const meta = {
    title: 'App / components / Note',
    tags: ['autodocs'],
    component: Component,
    argTypes: {
        note: {
            description: 'Object: Note object',
            control: { type: 'object'}
        },
        onDelete: {
            description: 'Function to handle deleting the note.',
        },
        onEdit: {
            description: 'Function to handle editing the note.',
        },
        user: { 
            description: 'user object with required fields: `name  ` & `role`.',
            control: { type: 'object' }
        }
    },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    args: { 
        note: {
            body: faker.lorem.lines(5),
            dateCreated: new Date()
        },
        user: {
            name: 'Gustav M',
            role: 'teacher',
        }
    }
};
