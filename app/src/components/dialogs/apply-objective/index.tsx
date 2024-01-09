'use client';

import {
    Dialog,
    DialogContent,
    DialogProps,
    DialogTitle,
    Divider,
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
    useController,
    useForm
} from 'react-hook-form';

import CloseIcon from '@mui/icons-material/Close';
import Courses from './courses';
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

    const handleClose = () => {
        reset();

        // @ts-ignore
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
            <DialogTitle>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography variant="h3">Apply Objective</Typography>
                    <Tooltip title="Close">
                        <IconButton aria-label="close" onClick={handleClose}>
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
                            error={Boolean(get(errors, searchField.name))}
                            InputProps={{
                                startAdornment: (
                                    <SearchIcon sx={{ marginRight: 1 }} />
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
                        <Courses
                            courses={courses}
                            devtool={devtool}
                            onSubmit={onSubmit}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default ApplyObjectiveDialog;
