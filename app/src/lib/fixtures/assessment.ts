export type Assessment = {
    id: string;
    objectiveId: string;
    value: string;
    warning?: boolean;
    error?: boolean;
};

import { Assessment as TAssessment } from '@/types';
import { faker } from '@faker-js/faker';

/**
 * Returns a assessment
 * @returns {TAssessment}
 */
export const assessment = (): TAssessment => ({
    id: faker.string.uuid(),
    objectiveId: faker.string.uuid(),
    value: faker.lorem.word(),
});

/**
 * Returns a list of assessments
 *
 * @param {number} cnt
 * @returns {TAssessment[]}
 */
export const assessmentList = (cnt: number = 1): TAssessment[] => {
    const retval: TAssessment[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(assessment());
    }

    return retval;
};
