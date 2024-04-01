import { Assessment } from './assessment';
import { User } from './user';

export type Student = User & {
    ratings?: Assessment[];
};
