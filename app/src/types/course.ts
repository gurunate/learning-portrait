import { Objective, Student } from '.';

export type Course = {
    id: string;
    name: string;
    description?: string;
    objectives?: Objective[];
    students?: Student[];
};
