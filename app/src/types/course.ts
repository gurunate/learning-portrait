import { Student } from '.';

export type Course = {
    id: string;
    name: string;
    description?: string;
    students?: Student[];
};
