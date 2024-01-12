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
    Tooltip,
    Typography
} from '@mui/material';
import { FieldErrors, FieldValues } from 'react-hook-form';

import CloseIcon from '@mui/icons-material/Close';
import Courses from './courses';
import React from 'react';
import Search from './search';
import { Course as TCourse } from '@/types';

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
    const handleClose = () => {
        // reset();

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
                    <Grid item xs={12}>
                        <Search onSearch={onSearch} onError={onError} />
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
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
