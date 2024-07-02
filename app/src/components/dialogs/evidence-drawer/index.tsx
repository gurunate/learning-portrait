'use client';

import {
    Box,
    Button,
    Chip,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    Drawer,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
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
import { Course as TCourse, Objective as TObjective } from '@/types';

import CloseIcon from '@mui/icons-material/Close';
import CourseSelect from '@/components/course-dropdown';
import { DevTool } from '@hookform/devtools';
import Editor from '../../editor';
import { EvidenceFormValues } from './schema';
import FileUploadCard from '../../file-upload-card';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import ObjectivesDropdown from '@/components/objective-dropdown';
import React from 'react';
import { evidenceSchema } from '../evidence/schema';
import { get } from 'lodash';
import { yupResolver } from '@hookform/resolvers/yup';

export type {EvidenceFormValues}

export type EvidenceDialogProps = DialogProps & {
    courses: TCourse[];
    devtool?: boolean;
    initialValue?: string;
    objectives?: TObjective[];
    onError?: (errors: FieldErrors) => void;
    onSubmit: (data: FieldValues) => void;
    uploadedOn?: string;
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 150
        }
    }
};

/**
 *
 * @param {EvidenceDialogProps} props
 * @returns {JSX.Element}
 */
const EvidenceDrawer: React.FC<EvidenceDialogProps> = ({
    courses: coursesProp,
    devtool = false,
    initialValue,
    objectives: objectivesProp,
    onClose,
    onError,
    onSubmit,
    open,
    uploadedOn
}: EvidenceDialogProps): JSX.Element => {
    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(evidenceSchema),
        defaultValues: {
            files: [],
            title: '',
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

    const { field: filesField } = useController({
        control,
        name: 'files'
    });

    const { field: titleField } = useController({
        control,
        name: 'name'
    });

    const { field: courseField } = useController({
        control,
        name: 'course'
    });

    const { field: objectiveField } = useController({
        control,
        name: 'objective'
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

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };
      
    const handleSaveDraft = () => {
        console.log('handleSaveDraft');
    };

    const handlePublish = () => {
        console.log('handlePublish');
    };

    const handleCoursesChange = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value }
        } = event;
        console.log({ value });

        courseField.onChange(
            event,
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const handleObjectivesChange = (event: SelectChangeEvent<string[]>) => {
        const {
            target: { value }
        } = event;

        objectiveField.onChange(
            event,
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const handleFileUploadChange = React.useCallback(
        (files: File[]) => {
            console.log('handleFileUploadChange', { files });
            filesField.onChange(files);
        },
        [filesField]
    );

    return (
        <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
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
                                <Typography variant="h3">New Evidence</Typography>
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
                                            <TextField
                                                {...titleField}
                                                error={Boolean(
                                                    get(errors, titleField.name)
                                                )}
                                                label="Title*"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={12}>
                                            <CourseSelect courses={[]}/>
                                        </Grid>
                                        <Grid item>
                                            <FileUploadCard
                                                onChange={handleFileUploadChange}
                                            />
                                        </Grid>
                                        <Grid item sm={12}>
                                            <ObjectivesDropdown objectives={[]}/>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <FormControl fullWidth>
                                                <InputLabel
                                                    id="course-label"
                                                    error={Boolean(
                                                        get(
                                                            errors,
                                                            courseField.name
                                                        )
                                                    )}
                                                >
                                                    Course
                                                </InputLabel>
                                                <Select
                                                    {...courseField}
                                                    id={courseField.name}
                                                    error={Boolean(
                                                        get(
                                                            errors,
                                                            courseField.name
                                                        )
                                                    )}
                                                    labelId="course-label"
                                                    label="Course"
                                                    multiple
                                                    onChange={
                                                        handleCoursesChange
                                                    }
                                                    renderValue={(
                                                        selected: string[]
                                                    ) => (
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                flexWrap:
                                                                    'wrap',
                                                                gap: 0.5
                                                            }}
                                                        >
                                                            {selected.map(
                                                                value => (
                                                                    <Chip
                                                                        key={
                                                                            value
                                                                        }
                                                                        label={
                                                                            coursesProp.find(
                                                                                ({
                                                                                    id
                                                                                }) =>
                                                                                    id ===
                                                                                    value
                                                                            )
                                                                                ?.name
                                                                        }
                                                                    />
                                                                )
                                                            )}
                                                        </Box>
                                                    )}
                                                    MenuProps={MenuProps}
                                                >
                                                    {coursesProp.map(
                                                        ({ id, name }) => (
                                                            <MenuItem
                                                                key={id}
                                                                value={id}
                                                            >
                                                                {name}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <FormControl fullWidth>
                                                <InputLabel
                                                    id="objective-label"
                                                    error={Boolean(
                                                        get(
                                                            errors,
                                                            objectiveField.name
                                                        )
                                                    )}
                                                >
                                                    Objective
                                                </InputLabel>
                                                <Select
                                                    {...objectiveField}
                                                    id={objectiveField.name}
                                                    error={Boolean(
                                                        get(
                                                            errors,
                                                            objectiveField.name
                                                        )
                                                    )}
                                                    labelId="objective-label"
                                                    label="Objective"
                                                    multiple
                                                    onChange={
                                                        handleObjectivesChange
                                                    }
                                                    renderValue={(
                                                        selected: string[]
                                                    ) => (
                                                        <Box
                                                            sx={{
                                                                display: 'flex',
                                                                flexWrap:
                                                                    'wrap',
                                                                gap: 0.5
                                                            }}
                                                        >
                                                            {selected.map(
                                                                value => (
                                                                    <Chip
                                                                        key={
                                                                            value
                                                                        }
                                                                        label={
                                                                            objectivesProp?.find(
                                                                                ({
                                                                                    id
                                                                                }) =>
                                                                                    id ===
                                                                                    value
                                                                            )
                                                                                ?.name
                                                                        }
                                                                    />
                                                                )
                                                            )}
                                                        </Box>
                                                    )}
                                                    MenuProps={MenuProps}
                                                >
                                                    {objectivesProp?.map(
                                                        ({ id, name }) => (
                                                            <MenuItem
                                                                key={id}
                                                                value={id}
                                                            >
                                                                {name}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        {uploadedOn && (
                                            <Grid item sm={12} mt={2}>
                                                <Typography
                                                    variant="h6"
                                                    color="textSecondary"
                                                >
                                                    <Stack
                                                        direction="row"
                                                        alignItems="center"
                                                        spacing={2}
                                                    >
                                                        <InsertInvitationIcon
                                                            sx={{
                                                                color: 'text.secondary'
                                                            }}
                                                        />
                                                        <span>
                                                            Uploaded on{' '}
                                                            {uploadedOn}
                                                        </span>
                                                    </Stack>
                                                </Typography>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Grid>
                                <Grid item sm={8}>
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
        </Drawer>
    );
};

export default EvidenceDrawer;
function setOpen(newOpen: boolean) {
    throw new Error('Function not implemented.');
}

