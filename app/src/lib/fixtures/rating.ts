import { Rating as TRating } from '@/types';
import { faker } from '@faker-js/faker';

/**
 * Returns a rating
 * @returns {TRating}
 */
export const rating = (): TRating => {;

    return {
        id: faker.string.uuid(),
        value: faker.helpers.arrayElement(['Mastery', 'Approaching', 'Not yet', 'Needs help']),
        objectiveId: faker.string.uuid(),
    };
};

/**
 * Returns a list of ratings
 *
 * @param {number} cnt
 * @returns {TRating[]}
 */
export const objectives = (cnt: number = 1): TRating[] => {
    const retval: TRating[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(rating());
    }

    return retval;
};
