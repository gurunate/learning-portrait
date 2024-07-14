import { Objective, Section, Student } from '.';

export type Course = {
    id: string;
    name: string;
    description?: string;
    objectives?: Objective[];
    students?: Student[];
    sections: Section[];
};
