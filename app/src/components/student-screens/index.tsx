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
    SelectChangeEvent,
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
import { Course as TCourse, Objective as TObjective } from '@/types';

import CloseIcon from '@mui/icons-material/Close';
import { DevTool } from '@hookform/devtools';
import Editor from '../editor';
import GradeSelect from '../grade-select';
import React from 'react';
import { get } from 'lodash';
import { yupResolver } from '@hookform/resolvers/yup';

export type SuggestGradeDialogProps = DialogProps & {
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
 * @param {SuggestGradeDialogProps} props
 * @returns {JSX.Element}
 */
const EvidenceDialog: React.FC<SuggestGradeDialogProps> = ({
    devtool = false,
    initialValue,
    onClose,
    onError,
    onSubmit,
    open,
}: SuggestGradeDialogProps): JSX.Element => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        defaultValues: {
            files: [],
            name: '',
            course: [],
            objective: [],
            description: ''
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
        name: 'description'
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
                                <Typography variant="h3">Suggest New Grade</Typography>
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
                            <Grid container direction="column" spacing={4} paddingTop={1}>
                                <Grid
                                    item
                                    sm={4}
                                    container
                                    direction="column"
                                    justifyContent="flex-start"
                                    alignItems="stretch"
                                    spacing={2}
                                >
                                    <Grid item container spacing={2}>
                                        <Grid item sm={12}>
                                        <Typography variant="subtitle1">My Grade</Typography>
                                            <GradeSelect/>
                                        </Grid>
                                    <Grid item sm={12} height={250}>
                                <Typography variant="subtitle1">Notes</Typography>
                                    <Editor
                                        defaultValue={initialValue}
                                        onEditorChange={
                                            descriptionField.onChange
                                        }
                                    />
                                </Grid>
                                </Grid>
                            </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                        <Button
                                variant="outlined"
                                onClick={handleClose}
                                sx={{width: '106px', gap: '10px', borderRadius: '4px', padding: '13px, 24px, 13px, 24px'}}
                            >
                                <Typography variant='subtitle2'>
                                    Cancel
                                </Typography>
                            </Button>
                            <Button type="submit" variant="contained" sx={{width: '106px', gap: '10px', borderRadius: '4px', padding: '13px, 24px, 13px, 24px'}}>
                                <Typography variant='subtitle2'>
                                    Add
                                </Typography>
                            </Button>
                        </DialogActions>
                    </form>
                </Box>
            </FormProvider>
        </Dialog>
    );
};

export default EvidenceDialog;
