import { Box, Container } from "@mui/system";
import { Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material";

import { format } from "date-fns";

export type NoteProps = {
    note: {body: string; dateCreated: Date;};
    onDelete: () => void;
    onEdit: () => void;
    user: { name: string; role: string; };
};

/**
 * @param {NoteProps} props
 * @returns {JSX.Element}
 */
const Note: React.FC<NoteProps> = props => {
    return (
        <Card sx={{ width: 300 }} variant='outlined'>
      <CardContent>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
        <Typography variant="subtitle1" color="text.secondary">
          {props.user.name}
        </Typography>
        <Typography variant="body2" sx={{paddingRight: '8px'}}>{format(props.note.dateCreated, 'MM/dd/yyyy')}</Typography>
        </Box>
        <Typography variant="body1" component="p">
          {props.note.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Box component='div' display='flex' width={150} pr={24}>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
        </Box>
        <Chip color={props.user.role === 'teacher' ? 'info' : 'warning'} label={props.user.role} size='small' sx={{ borderRadius: 50 }} />
      </CardActions>
    </Card>

    );
}

export default Note;
