export { course, courses } from './course';
export { objective, objectives } from './objective';
export { student, students } from './student';

/**
 * Returns a randomized entry from the provided list.
 *
 * @param {string | any[]} list
 * @returns {unknown}
 */
export const randomized = (list: string | any[]): unknown =>
    list[Math.floor(Math.random() * (list.length - 0))];
