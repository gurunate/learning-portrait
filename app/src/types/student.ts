import { Rating } from './rating';

export type Student = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    avatar?: string;
    ratings?: Rating[];
};
