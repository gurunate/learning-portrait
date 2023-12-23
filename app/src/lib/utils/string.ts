import { Student } from '@/types';

/**
 * @param {Student} student
 * @returns {string | unknown}
 */
export const formatFullName = (student?: Student): string | unknown => {
    if (!student?.firstName && !student?.lastName) {
        return student;
    }

    return `${student?.firstName} ${student?.lastName}`;
};
