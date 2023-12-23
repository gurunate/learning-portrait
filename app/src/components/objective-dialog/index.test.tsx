import ObjectiveDialog, { objectiveSchema } from '.';

import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

describe('ObjectiveDialog', () => {
    describe('schema', () => {
        it('should require a Name', async () => {
            await expect(
                objectiveSchema.validateAt('name', { name: null })
            ).rejects.toBeTruthy();

            await expect(
                objectiveSchema.validateAt('name', { name: faker.lorem.word() })
            ).resolves.toBeTruthy();
        });

        it('should require aa abbreviation', async () => {
            await expect(
                objectiveSchema.validateAt('abbreviation', {
                    abbreviation: null
                })
            ).rejects.toBeTruthy();

            await expect(
                objectiveSchema.validateAt('abbreviation', {
                    abbreviation: faker.lorem.word()
                })
            ).resolves.toBeTruthy();
        });
    });

    describe('component', () => {
        it('should render', () => {
            const handleSubmit = jest.fn();

            render(<ObjectiveDialog open onSubmit={handleSubmit} />);
        });
    });
});
