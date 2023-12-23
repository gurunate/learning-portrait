import { Student as TStudent } from '@/types';
import { faker } from '@faker-js/faker';

/**
 * Returns a student
 * @returns {TStudent}
 */
export const student = (): TStudent => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: faker.internet.avatar()
    // ratings?: Rating[];
});

/**
 * Returns a list of students
 *
 * @param {number} cnt
 * @returns {TStudent[]}
 */
export const students = (cnt: number = 1): TStudent[] => {
    const retval: TStudent[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(student());
    }

    return retval;
};
