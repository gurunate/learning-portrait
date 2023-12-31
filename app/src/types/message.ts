import { User } from '.';

export type Message = {
    id: string;
    sender: User;
    recipient: User;
    created: Date;
    comment: string;
};
