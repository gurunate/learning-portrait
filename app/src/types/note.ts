export type Note = {
    note: string; 
    dateCreated: Date;
    onDelete?: () => void;
    onEdit?: () => void;
    username: string; 
    role: 'teacher' | 'student';
};
