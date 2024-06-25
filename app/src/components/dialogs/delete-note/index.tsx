import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Stack, Tooltip, Typography } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

export interface DeleteNoteProps {
    open: boolean;
    handleClose?: () => void;
}

const DeleteNote: React.FC<DeleteNoteProps> = ({open, handleClose}) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="delete-note-dialog-title"
            aria-describedby="delete-note-dialog-description"
            fullWidth 
            maxWidth="xs"
            sx={{ padding: '24px'}}
        >
        <DialogTitle id="delete-note-dialog-title">
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h3">Delete Note</Typography>
                <Tooltip title="Close">
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                    >
                        <CloseIcon
                            sx={{ width: 20, height: 20 }}
                        />
                    </IconButton>
                </Tooltip>
            </Stack>
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="delete-note-dialog-question">
                <Typography sx={{ paddingBlockEnd: '16px'}} variant="body1">Are you sure you want to delete this note?</Typography>
            </DialogContentText>
            <DialogContentText id="delete-note-dialog-description">
                <Typography variant="body1">Deleted notes cannot be recovered.</Typography>
            </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ padding: '24px' }}>
            <Button onClick={handleClose} sx={{ borderRadius: '4px' }} variant="outlined">Cancel</Button>
            <Button onClick={handleClose} sx={{ borderRadius: '4px' }} variant='contained' autoFocus>
                Delete
            </Button>
        </DialogActions>
      </Dialog>
    )
};

export default DeleteNote;
    