import * as fixtures from '@/lib/fixtures';

import ApplyObjectiveDialog, { objectiveSchema } from '.';

import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

describe('ApplyObjectiveDialog', () => {
    describe.skip('schema', () => {
        it('should require a Name', async () => {
            await expect(
                objectiveSchema.validateAt('name', { name: null })
            ).rejects.toBeTruthy();

            await expect(
                objectiveSchema.validateAt('name', { name: faker.lorem.word() })
            ).resolves.toBeTruthy();
        });
    });

    describe('component', () => {
        it('should render', () => {
            const handleSearch = jest.fn();
            const handleSubmit = jest.fn();

            const courses = fixtures.courses(1);

            render(
                <ApplyObjectiveDialog
                    open
                    courses={courses}
                    onSearch={handleSearch}
                    onSubmit={handleSubmit}
                />
            );
        });
    });
});
