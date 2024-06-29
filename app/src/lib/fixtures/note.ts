import { Note as TNote } from '@/types';
import { faker } from '@faker-js/faker';

/**
 * Returns a note
 * @returns {TNote}
 */
export const note = (): TNote => ({
    username: faker.person.fullName(), 
    role: faker.helpers.arrayElement(['teacher', 'student']),
    note: faker.lorem.lines(Math.random() * 10), 
    dateCreated: faker.date.past(),
});

/**
 * Returns a list of notes
 *
 * @param {number} cnt
 * @returns {TNote[]}
 */
export const notes = (cnt: number = 1): TNote[] => {
    const retval: TNote[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(note());
    }

    return retval;
};
