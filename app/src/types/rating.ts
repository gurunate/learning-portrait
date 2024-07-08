export type Rating = {
    id: string;
    objectiveId: string;
    value: 'Mastery' | 'Approaching' | 'Not yet' | 'Needs help';
    warning?: boolean;
    error?: boolean;
};
