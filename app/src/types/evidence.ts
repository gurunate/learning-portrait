export type Evidence = {
    id: string;
    name: string;
    description?: string;
    uploaded?: Date;
    teacherRating: string;
    studentRating: string;
    starred?: boolean;
};
