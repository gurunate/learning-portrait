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
    TextField,
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
import { get } from 'lodash';
import { objectiveSchema } from './schema';
import { yupResolver } from '@hookform/resolvers/yup';

export { objectiveSchema } from './schema';
export type { ObjectiveFormValues } from './schema';

export type ObjectiveDialogProps = DialogProps & {
    devtool?: boolean;
    initialValue?: string;
    onError?: (errors: FieldErrors) => void;
    onSubmit: (data: FieldValues) => void;
    uploadedOn?: string;
};

/**
 *
 * @param {ObjectiveDialogProps} props
 * @returns {JSX.Element}
 */
const ObjectiveDialog: React.FC<ObjectiveDialogProps> = ({
    devtool = false,
    initialValue,
    onClose,
    onError,
    onSubmit,
    open
}: ObjectiveDialogProps): JSX.Element => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(objectiveSchema),
        defaultValues: {
            name: '',
            abbreviation: '',
            description: ''
        }
    });

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = methods;

    const { field: nameField } = useController({
        control,
        name: 'name'
    });

    const { field: abbreviationField } = useController({
        control,
        name: 'abbreviation'
    });

    const { field: descriptionField } = useController({
        control,
        name: 'description'
    });

    const handleClose = () => {
        reset();

        // @ts-ignore
        onClose();
    };

    const handleSaveDraft = () => {
        console.log('handleSaveDraft');
    };

    const handlePublish = () => {
        console.log('handlePublish');
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
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
                                <Typography variant="h3">Objective</Typography>
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
                            <Grid container direction="row" spacing={4} pt={1}>
                                <Grid item sm={8}>
                                    <TextField
                                        {...nameField}
                                        error={Boolean(
                                            get(errors, nameField.name)
                                        )}
                                        label="Name"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item sm={4}>
                                    <TextField
                                        {...abbreviationField}
                                        error={Boolean(
                                            get(errors, abbreviationField.name)
                                        )}
                                        label="Abbreviation"
                                        fullWidth
                                    />
                                </Grid>

                                <Grid item sm={12} minHeight={300}>
                                    <Editor
                                        defaultValue={initialValue}
                                        onEditorChange={
                                            descriptionField.onChange
                                        }
                                        placeholder="Enter what the areas that will be
                                            covered and/or what mastery looks
                                            like, etc."
                                    />
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="outlined"
                                onClick={handleSaveDraft}
                            >
                                Save Draft
                            </Button>
                            <Button type="submit" variant="contained">
                                Publish
                            </Button>
                        </DialogActions>
                    </form>
                </Box>
            </FormProvider>
        </Dialog>
    );
};

export default ObjectiveDialog;
