import type { Meta, StoryObj } from '@storybook/react';

import Component from '.';
import GradeSelect from '@/components/grade-select';
import Rating from '@/components/rating';

const meta = {
    title: 'App / components / tables / Course',
    component: Component,
    tags: ['autodocs']
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const demo: Story = {
    args: {
        columns: [
            { id: 'name', label: 'Student Name', minWidth: 1536},
            { id: 'overall', label: 'Overall Grade', minWidth: 172 },
            { id: 'ratiosPortions', label: 'Ratios & Portions', minWidth: 172 },
            { id: 'vectors', label: 'Vectors', minWidth: 172 },
            { id: 'matrices', label: 'Matrices', minWidth: 172 },
            { id: 'sequences', label: 'Sequences', minWidth: 172 },
            { id: 'limits', label: 'Limits', minWidth: 172 },
            { id: 'derivatives', label: 'Derivatives', minWidth: 172 },
            { id: 'integrals', label: 'Integrals', minWidth: 172 },
            { id: 'differentialEquations', label: 'Differential Equations', minWidth: 172},
        ],
        rows: [
            {
                name: 'Amy Jane',
                overall: <GradeSelect value={['B-']} onChange={(e) => e.target.value}/>,
                ratiosPortions: <Rating color='info' variant='filled' label='Approaching' />,
                vectors: <Rating color='success' variant='filled' label='Mastery' />,
                matrices:  <Rating color='success' variant='filled' label='Mastery' overRated />,
                sequences:  <Rating color='success' variant='filled' label='Mastery' />,
                limits: '-',
                derivatives:  <Rating color='success' variant='filled' label='Mastery' />,
                integrals:  <Rating color='error' variant='filled' label='Needs help' />,
                differentialEquations:  <Rating color='success' variant='filled' label='Mastery' />
            },
            {
                name: 'John Doe',
                overall: <GradeSelect value={['A-']} />,
                ratiosPortions: '-',
                vectors: <Rating color='warning' variant='filled' label='Not yet' />,
                matrices:  <Rating color='success' variant='filled' label='Mastery' />,
                sequences: '-',
                limits:  <Rating color='success' variant='filled' label='Mastery' />,
                derivatives:  <Rating color='warning' variant='filled' label='Not yet' />,
                integrals:  <Rating color='warning' variant='filled' label='Not yet' underRated />,
                differentialEquations:  <Rating color='success' variant='filled' label='Mastery' />
            },
            {
                name: 'Jane Doe',
                overall: <GradeSelect value={['B+']} />,
                ratiosPortions: <Rating color='success' variant='filled' label='Mastery' />,
                vectors: <Rating color='success' variant='filled' label='Mastery' />,
                matrices:  <Rating color='success' variant='filled' label='Mastery' />,
                sequences:  <Rating color='success' variant='filled' label='Mastery' />,
                limits:  <Rating color='success' variant='filled' label='Mastery' />,
                derivatives:  <Rating color='success' variant='filled' label='Mastery' />,
                integrals:  <Rating color='success' variant='filled' label='Mastery' />,
                differentialEquations:  <Rating color='success' variant='filled' label='Mastery' />
            }, 
            {
                name: 'John Smith',
                overall: <GradeSelect value={['A']} />,
                ratiosPortions: <Rating color='success' variant='filled' label='Mastery' />,
                vectors: <Rating color='success' variant='filled' label='Mastery' />,
                matrices:  <Rating color='success' variant='filled' label='Mastery' />,
                sequences:  <Rating color='success' variant='filled' label='Mastery' />,
                limits:  <Rating color='success' variant='filled' label='Mastery' />,
                derivatives:  <Rating color='success' variant='filled' label='Mastery' />,
                integrals:  <Rating color='success' variant='filled' label='Mastery' />,
                differentialEquations:  <Rating color='success' variant='filled' label='Mastery' />
            }, 
            {
                name: 'Jane Smith',
                overall: <GradeSelect value={['A+']} />,
                ratiosPortions: <Rating color='success' variant='filled' label='Mastery' />,
                vectors: <Rating color='success' variant='filled' label='Mastery' />,
                matrices:  <Rating color='success' variant='filled' label='Mastery' />,
                sequences:  <Rating color='success' variant='filled' label='Mastery' />,
                limits:  <Rating color='success' variant='filled' label='Mastery' />,
                derivatives:  <Rating color='success' variant='filled' label='Mastery' />,
                integrals:  <Rating color='success' variant='filled' label='Mastery' />,
                differentialEquations:  <Rating color='success' variant='filled' label='Mastery' />
            },
            {
                name: 'John Doe',
                overall: '-',
                ratiosPortions: '-',
                vectors: <Rating color='error' variant='filled' label='Needs Help' />,
                matrices:  '-',
                sequences:  '-',
                limits:  '-',
                derivatives:  <Rating color='warning' variant='filled' label='Not yet' underRated />,
                integrals:  '-',
                differentialEquations: '-'
            },
            {
                name: 'Jane Doe',
                overall: <GradeSelect value={['C+']} />,
                ratiosPortions: <Rating color='success' variant='filled' label='Mastery' />,
                vectors: <Rating color='success' variant='filled' label='Mastery' />,
                matrices:  <Rating color='success' variant='filled' label='Mastery' />,
                sequences:  <Rating color='success' variant='filled' label='Mastery' />,
                limits:  <Rating color='success' variant='filled' label='Mastery' />,
                derivatives:  <Rating color='success' variant='filled' label='Mastery' />,
                integrals:  <Rating color='success' variant='filled' label='Mastery' />,
                differentialEquations:  <Rating color='success' variant='filled' label='Mastery' />
            },
            {
                name: 'John Smith',
                overall: <GradeSelect value={['C']} />,
                ratiosPortions: <Rating color='success' variant='filled' label='Mastery' />,
                vectors: <Rating color='success' variant='filled' label='Mastery' />,
                matrices:  <Rating color='success' variant='filled' label='Mastery' />,
                sequences:  <Rating color='success' variant='filled' label='Mastery' />,
                limits:  <Rating color='success' variant='filled' label='Mastery' />,
                derivatives:  '-',
            }
        ]
    }
};
