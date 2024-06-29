import { Box } from '@mui/material';
import { Masonry } from '@mui/lab';
import Note from '../note';
import { Note as TNote } from '@/types';

export type MasonryGridProps = {
    columns: number;
    notes: TNote[];
}

/**
 *
 * @param {MasonryGridProps} props
 * @returns {JSX.Element}
 */
const MasonryGrid = ({columns, notes}: MasonryGridProps): JSX.Element => {
    return (
        <Box sx={{ width: '100%', minHeight: 829 }}>
            <Masonry columns={columns} spacing={2}>
                {notes.map((note, index) => (
                    <Note 
                        key={index}
                        note={note.note}
                        dateCreated={note.dateCreated}
                        role={note.role}
                        username={note.username} onDelete={function (): void {
                            throw new Error('Function not implemented.');
                        } } onEdit={function (): void {
                            throw new Error('Function not implemented.');
                        } }                       
                    />
                ))}
            </Masonry>
        </Box>
    );
}

export default MasonryGrid;
