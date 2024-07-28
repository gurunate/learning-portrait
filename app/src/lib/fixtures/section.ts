import { Section as TSection } from '@/types';
import { faker } from '@faker-js/faker';
import { objectives } from './objective';

/**
 * Returns a Section
 * @returns {TSection}
 */
export const section = (): TSection => ({
    id: faker.string.uuid(),
    name: faker.lorem.words(),
    description: faker.lorem.sentence(),
    courseId: ''
});

/**
 * Returns a list of Sections
 *
 * @param {number} cnt
 * @returns {TSection[]}
 */
export const sections = (cnt: number = 1): TSection[] => {
    const retval: TSection[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(section());
    }

    return retval;
};
