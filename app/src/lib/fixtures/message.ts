import { Message as TMessage, User as TUser } from '@/types';

import { faker } from '@faker-js/faker';
import { user } from '.';

export type MessageOptions = {
    sender?: TUser;
    recipient?: TUser;
};

/**
 * Returns a message
 * @param {MessageOptions} options
 * @returns {TMessage}
 */
export const message = ({
    sender: senderOpt = user(),
    recipient: recipientOpt = user()
}: MessageOptions): TMessage => {
    const trigger = faker.number.int(3);

    return {
        id: faker.string.uuid(),
        sender: trigger > 1 ? recipientOpt : senderOpt,
        recipient: trigger > 1 ? senderOpt : recipientOpt,
        created: faker.date.recent({ days: 17 }),
        comment: faker.lorem.sentences(faker.number.int({ min: 1, max: 7 }))
    };
};

/**
 * Returns a list of messages
 *
 * @param {number} cnt
 * @param {MessageOptions} options
 * @returns {TMessage[]}
 */
export const messages = (
    cnt: number = 1,
    options: MessageOptions = {}
): TMessage[] => {
    const retval: TMessage[] = [];

    for (let i = 0; i < cnt; i++) {
        retval.push(message(options));
    }

    return retval;
};
