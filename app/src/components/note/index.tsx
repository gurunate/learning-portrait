import { Box, Container } from "@mui/system";
import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";

import { format } from "date-fns";

export type NoteProps = {
    note: string; 
    dateCreated: Date;
    onDelete: () => void;
    onEdit: () => void;
    username: string; 
    role: 'teacher' | 'student';
    showChip?: boolean;
    width?: number;
};

/**
 * @param {NoteProps} props
 * @returns {JSX.Element}
 */
const Note = ({
  note, 
  dateCreated,
  onDelete,
  onEdit,
  username,
  role,
  showChip = true,
  width,
  ...props
}: NoteProps): JSX.Element => {
    return (
        <Card sx={{ minWidth: width || 300, minHeight: 190 }} variant='outlined'>
          <CardContent>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Typography variant="subtitle1" color="text.secondary">
                {username}
              </Typography>
              <Typography variant="body2" sx={{paddingRight: '8px'}}>{format(dateCreated, 'MM/dd/yyyy')}</Typography>
            </Box>
            <Typography variant="body1" component="p">
              {note}
            </Typography>
          </CardContent>
          <CardActions sx={{display: 'flex', justifyContent: 'space-between', alignContent: 'flex-end'}}>
            <Box component='div' display='flex' width={150} pr={24}>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </Box>
            {showChip ? <Chip color={role === 'teacher' ? 'info' : 'warning'} label={role} size='small' sx={{ borderRadius: 50 }} /> : null }
          </CardActions>
        </Card>
    );
}

export default Note;
