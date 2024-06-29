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
};

/**
 * @param {NoteProps} props
 * @returns {JSX.Element}
 */
const Note = (props: NoteProps): JSX.Element => {
    return (
        <Card sx={{ width: 300 }} variant='outlined'>
          <CardContent>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Typography variant="subtitle1" color="text.secondary">
                {props.username}
              </Typography>
              <Typography variant="body2" sx={{paddingRight: '8px'}}>{format(props.dateCreated, 'MM/dd/yyyy')}</Typography>
            </Box>
            <Typography variant="body1" component="p">
              {props.note}
            </Typography>
          </CardContent>
          <CardActions sx={{display: 'flex', justifyContent: 'space-between', marginInlineEnd: '10px'}}>
            <Box component='div' display='flex' width={150} pr={24}>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </Box>
            <Chip color={props.role === 'teacher' ? 'info' : 'warning'} label={props.role} size='small' sx={{ borderRadius: 50 }} />
          </CardActions>
        </Card>
    );
}

export default Note;
