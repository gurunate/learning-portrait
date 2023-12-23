import { Rating } from './rating';
import { User } from './user';

export type Student = User & {
    ratings?: Rating[];
};
