import { Objective as TObjective } from '@/types';
import { faker } from '@faker-js/faker';
import { startCase } from 'lodash';

/**
 * Returns a objective
 * @returns {TObjective}
 */
export const objective = (): TObjective => {
    const name = startCase(faker.word.adjective());

    return {
        id: faker.string.uuid(),
        name,
        key: name.substring(0, 3).toUpperCase(),
        description: faker.lorem.sentence()
    };
};

/**
 * Returns a list of objectives
 *
 * @param {number} cnt
 * @returns {TObjective[]}
 */
export const objectives = (cnt: number = 1): TObjective[] => {
    const retval: TObjective[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(objective());
    }

    return retval;
};
