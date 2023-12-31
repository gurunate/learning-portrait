export { course, courses } from './course';
export { evidence, evidenceList } from './evidence';
export { message, messages } from './message';
export { objective, objectives } from './objective';
export { student, students } from './student';
export { user, users } from './user';

/**
 * Returns a randomized entry from the provided list.
 *
 * @param {string | any[]} list
 * @returns {unknown}
 */
export const randomized = (list: string | any[]): unknown =>
    list[Math.floor(Math.random() * (list.length - 0))];
