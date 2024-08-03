import EvidenceDialog, { evidenceSchema } from '.';
import { Course as TCourse, Objective as TObjective, Student as TStudent } from '@/types';

import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

describe('EvidenceDialog', () => {
    describe('schema', () => {
        it('should require a title', async () => {
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
            const courses: TCourse[] = [{
                id: '1', 
                name: 'Course 1',
                sections: []
            }];
            const objectives: TObjective[] = [{
                id: '1', 
                name: 'Objective 1',
                parentId: '',
                key: ''
            }];
            const students: TStudent[] = [{ id: '1', firstName: 'Student', lastName: '', email: '' }]; 
        
            render(
                <EvidenceDialog
                    open
                    courses={courses}
                    objectives={objectives}
                    students={students}
                    onSubmit={handleSubmit}
                    selectAllStudents={false}
                />
            );
        });
    });
});
