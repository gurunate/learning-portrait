import EvidenceDialog, { evidenceSchema } from '.';

import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

describe('EvidenceDialog', () => {
    describe('schema', () => {
        it('should require a Name', async () => {
            await expect(
                evidenceSchema.validateAt('name', { name: null })
            ).rejects.toBeTruthy();

            await expect(
                evidenceSchema.validateAt('name', { name: faker.lorem.word() })
            ).resolves.toBeTruthy();
        });

        it('should require a Course', async () => {
            await expect(
                evidenceSchema.validateAt('course', { course: null })
            ).rejects.toBeTruthy();

            await expect(
                evidenceSchema.validateAt('course', { course: [] })
            ).rejects.toBeTruthy();

            await expect(
                evidenceSchema.validateAt('course', {
                    course: [faker.lorem.word()]
                })
            ).resolves.toBeTruthy();

            await expect(
                evidenceSchema.validateAt('course', {
                    course: [
                        faker.lorem.word(),
                        faker.lorem.word(),
                        faker.lorem.word()
                    ]
                })
            ).resolves.toBeTruthy();
        });

        it('should require an Objective', async () => {
            await expect(
                evidenceSchema.validateAt('objective', { objective: null })
            ).rejects.toBeTruthy();

            await expect(
                evidenceSchema.validateAt('objective', { objective: [] })
            ).rejects.toBeTruthy();

            await expect(
                evidenceSchema.validateAt('objective', {
                    objective: [faker.lorem.word()]
                })
            ).resolves.toBeTruthy();

            await expect(
                evidenceSchema.validateAt('objective', {
                    objective: [
                        faker.lorem.word(),
                        faker.lorem.word(),
                        faker.lorem.word()
                    ]
                })
            ).resolves.toBeTruthy();
        });
    });

    describe('component', () => {
        it('should render', () => {
            const handleSubmit = jest.fn();

            render(
                <EvidenceDialog
                    open
                    courses={[]}
                    objectives={[]}
                    onSubmit={handleSubmit}
                />
            );
        });
    });
});
