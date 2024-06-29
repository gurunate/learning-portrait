import { User as TUser } from '@/types';
import { faker } from '@faker-js/faker';

/**
 * Returns a user
 * @returns {TUser}
 */
export const user = (): TUser => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    avatar: faker.number.int(10) > 3 ? faker.image.avatar() : undefined
});

/**
 * Returns a list of users
 *
 * @param {number} cnt
 * @returns {TUser[]}
 */
export const users = (cnt: number = 1): TUser[] => {
    const retval: TUser[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(user());
    }

    return retval;
};
