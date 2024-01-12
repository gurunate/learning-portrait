import * as fixtures from '@/lib/fixtures';

import Courses, { coursesSchema } from '.';

import React from 'react';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

describe('ApplyObjectiveDialog: Courses', () => {
    describe.skip('schema', () => {
        it('should require a Name', async () => {
            await expect(
                coursesSchema.validateAt('name', { name: null })
            ).rejects.toBeTruthy();

            await expect(
                coursesSchema.validateAt('name', { name: faker.lorem.word() })
            ).resolves.toBeTruthy();
        });
    });

    describe('component', () => {
        it('should render', () => {
            const handleSubmit = jest.fn();

            const courses = fixtures.courses(1);

            render(<Courses courses={courses} onSubmit={handleSubmit} />);
        });
    });
});
