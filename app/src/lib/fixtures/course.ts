import { Course as TCourse } from '@/types';
import { faker } from '@faker-js/faker';

/**
 * Returns a course
 * @returns {TCourse}
 */
export const course = (): TCourse => ({
    id: faker.string.uuid(),
    name: faker.lorem.words(),
    description: faker.lorem.sentence()
});

/**
 * Returns a list of courses
 *
 * @param {number} cnt
 * @returns {TCourse[]}
 */
export const courses = (cnt: number = 1): TCourse[] => {
    const retval: TCourse[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(course());
    }

    return retval;
};
