'use client';

import {
    Button,
    Checkbox,
    Dialog,
    DialogContent,
    DialogProps,
    DialogTitle,
    Divider,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    IconButton,
    Stack,
    TextField,
    Tooltip,
    Typography,
    useTheme
} from '@mui/material';
import {
    FieldErrors,
    FieldValues,
    FormProvider,
    useController,
    useForm
} from 'react-hook-form';

import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
// @ts-ignore
import { DevTool } from '@hookform/devtools';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Course as TCourse } from '@/types';
import { applyObjectiveSchema } from './schema';
import { get } from 'lodash';
import { yupResolver } from '@hookform/resolvers/yup';

export { applyObjectiveSchema as objectiveSchema } from './schema';
export type { ApplyObjectiveFormValues as ObjectiveFormValues } from './schema';

export type ApplyObjectiveDialogProps = DialogProps & {
    courses: TCourse[];
    devtool?: boolean;
    onError?: (errors: FieldErrors) => void;
    onSearch: (term: string) => void;
    onSubmit: (data: FieldValues) => void;
};

/**
 *
 * @param {ApplyObjectiveDialogProps} props
 * @returns {JSX.Element}
 */
const ApplyObjectiveDialog: React.FC<ApplyObjectiveDialogProps> = ({
    courses = [],
    devtool = false,
    onClose,
    onError,
    onSearch,
    onSubmit,
    open
}: ApplyObjectiveDialogProps): JSX.Element => {
    const theme = useTheme();

    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(applyObjectiveSchema),
        defaultValues: {
            search: '',
            courses: []
        }
    });

    const {
        control,
        formState: { errors },
        handleSubmit,
        reset
    } = methods;

    const { field: searchField } = useController({
        control,
        name: 'search'
    });

    const { field: coursesField } = useController({
        control,
        name: 'courses'
    });

    const handleClose = () => {
        reset();

        // @ts-ignore
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
            <FormProvider {...methods}>
                {devtool && <DevTool control={control} placement="top-right" />}
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <DialogTitle>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography variant="h3">
                                Apply Objective
                            </Typography>
                            <Tooltip title="Close">
                                <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                >
                                    <CloseIcon sx={{ width: 30, height: 30 }} />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container direction="row" spacing={2}>
                            <Grid item sm={12}>
                                <TextField
                                    {...searchField}
                                    error={Boolean(
                                        get(errors, searchField.name)
                                    )}
                                    InputProps={{
                                        startAdornment: (
                                            <SearchIcon
                                                sx={{ marginRight: 1 }}
                                            />
                                        )
                                    }}
                                    placeholder="Search for course or evidence"
                                    fullWidth
                                    autoFocus
                                />
                            </Grid>
                            <Grid item sm={12}>
                                <Divider />
                            </Grid>
                            <Grid item sm={12}>
                                <FormControl
                                    component="fieldset"
                                    variant="standard"
                                    fullWidth
                                >
                                    <FormLabel component="legend">
                                        <Stack
                                            direction="row"
                                            justifyContent="space-between"
                                            alignItems="center"
                                        >
                                            <Typography variant="h6">
                                                Courses
                                            </Typography>
                                            <Button size="small">Edit</Button>
                                        </Stack>
                                    </FormLabel>
                                    <FormGroup {...coursesField}>
                                        {courses?.map(({ id, name }) => (
                                            <FormControlLabel
                                                key={id}
                                                control={
                                                    <Checkbox
                                                        checkedIcon={
                                                            <CheckCircleOutlineOutlinedIcon color="success" />
                                                        }
                                                    />
                                                }
                                                label={name}
                                            />
                                        ))}
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                            <Grid item sm={12}>
                                <Button
                                    type="submit"
                                    variant="outlined"
                                    fullWidth
                                >
                                    Done
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </form>
            </FormProvider>
        </Dialog>
    );
};

export default ApplyObjectiveDialog;
