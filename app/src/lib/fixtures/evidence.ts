import { Evidence as TEvidence } from '@/types';
import { faker } from '@faker-js/faker';

/**
 * Returns a evidence
 * @returns {TEvidence}
 */
export const evidence = (): TEvidence => ({
    id: faker.string.uuid(),
    name: faker.lorem.words(),
    uploaded: faker.date.recent({ days: 7 }),
    description: faker.lorem.sentence(),
    teacherRating: faker.helpers.arrayElement(['T', 'M', 'A', 'E']),
    studentRating: faker.helpers.arrayElement(['T', 'M', 'A', 'E']),
    starred: faker.number.int(10) > 7
});

/**
 * Returns a list of evidences
 *
 * @param {number} cnt
 * @returns {TEvidence[]}
 */
export const evidenceList = (cnt: number = 1): TEvidence[] => {
    const retval: TEvidence[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(evidence());
    }

    return retval;
};
