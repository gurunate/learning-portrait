import { Course as TCourse } from '@/types';
import { faker } from '@faker-js/faker';
import { objectives } from './objective';
import { sections } from './section';

/**
 * Returns a course
 * @returns {TCourse}
 */
export const course = (): TCourse => ({
    id: faker.string.uuid(),
    name: faker.lorem.words(),
    description: faker.lorem.sentence(),
    objectives: objectives(5),
    sections: sections(4)
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
