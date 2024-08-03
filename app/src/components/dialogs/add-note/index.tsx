'use client';

import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    Grid,
    IconButton,
    Stack,
    Tooltip,
    Typography
} from '@mui/material';
import {
    FieldErrors,
    FieldValues,
    FormProvider,
    useController,
    useForm
} from 'react-hook-form';

import CloseIcon from '@mui/icons-material/Close';
import { DevTool } from '@hookform/devtools';
import Editor from '../../editor';
import React from 'react';
import { noteSchema } from '../edit-note';
import { yupResolver } from '@hookform/resolvers/yup';

export type AddNoteDialogProps = DialogProps & {
    devtool?: boolean;
    initialValue?: string;
    onError?: (errors: FieldErrors) => void;
    onSubmit: (data: FieldValues) => void;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
        }
    }
};

/**
 *
 * @param {AddNoteDialogProps} props
 * @returns {JSX.Element}
 */
const AddNoteDialog: React.FC<AddNoteDialogProps> = ({
    devtool = false,
    initialValue,
    onClose,
    onError,
    onSubmit,
    open,
}: AddNoteDialogProps): JSX.Element => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(noteSchema),
        defaultValues: {
            note: '',
        }
    });

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = methods;


    const { field: descriptionField } = useController({
        control,
        name: 'note'
    });

    const handleClose = () => {
        reset();

        // @ts-ignore
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <FormProvider {...methods}>
                {devtool && <DevTool control={control} placement="top-right" />}
                <Box p={2}>
                    <form onSubmit={handleSubmit(onSubmit, onError)}>
                        <DialogTitle>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Typography variant="h4">+ Add Note</Typography>
                                <Tooltip title="Close">
                                    <IconButton
                                        aria-label="close"
                                        onClick={handleClose}
                                    >
                                        <CloseIcon
                                            sx={{ width: 30, height: 30 }}
                                        />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                        </DialogTitle>
                        <DialogContent>
                            <Grid container direction="column" spacing={4}>
                                <Grid item sm={8} height={250}>
                                    <Editor
                                        defaultValue={initialValue}
                                        onEditorChange={
                                            descriptionField.onChange
                                        }
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="outlined"
                                onClick={handleClose}
                                sx={{ borderRadius: '4px'}}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained" sx={{ borderRadius: '4px'}}>
                                Save
                            </Button>
                        </DialogActions>
                    </form>
                </Box>
            </FormProvider>
        </Dialog>
    );
};

export default AddNoteDialog;
