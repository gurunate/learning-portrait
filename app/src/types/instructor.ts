import { Course } from '.';
import { User } from './user';

export type Instructor = User & {
    courses?: Course[];
};
