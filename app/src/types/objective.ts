export type Objective = {
    id: string;
    name: string;
    parentId: string;
    key: string;
    description?: string;
    children?: Objective[];
};
