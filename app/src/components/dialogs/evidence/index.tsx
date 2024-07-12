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
    FormControlLabel,
    FormLabel,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
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
import React, { useState } from 'react';
import { Course as TCourse, Objective as TObjective } from '@/types';

import CloseIcon from '@mui/icons-material/Close';
import CourseDropdown from '@/components/course-dropdown';
import Courses from '../apply-objective/courses';
import { DevTool } from '@hookform/devtools';
import Editor from '../../editor';
import FileUploadCard from '../../file-upload-card';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import ObjectivesDropdown from '@/components/objective-dropdown';
import { evidenceSchema } from './schema';
import { get } from 'lodash';
import { yupResolver } from '@hookform/resolvers/yup';

export { evidenceSchema } from './schema';
export type { EvidenceFormValues } from './schema';

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
            width: 250
        }
    }
};

/**
 *
 * @param {EvidenceDialogProps} props
 * @returns {JSX.Element}
 */
const EvidenceDialog: React.FC<EvidenceDialogProps> = ({
    courses: coursesProp,
    devtool = false,
    initialValue,
    objectives: objectivesProp,
    courses = [],
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

    const { field: filesField } = useController({
        control,
        name: 'files'
    });

    const { field: nameField } = useController({
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

    const handleSaveDraft = () => {
        console.log('handleSaveDraft');
    };

    const handlePublish = () => {
        console.log('handlePublish');
    };

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
      };
      
      function setOpen(newOpen: boolean) {
        throw new Error('Function not implemented.');
    }
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

    // Radio Button Logic
    const [selectedOption, setSelectedOption] = useState('all');
    const [selectedStudent, setSelectedStudent] = useState('')
    const handleRadioChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedOption(event.target.value); // Update selected radio button option
        setSelectedStudent(''); // Reset selected student when radio button changes
    };

    const handleStudentChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedStudent(event.target.value); // Update selected student
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
        <Drawer open={open} anchor="right" onClose={toggleDrawer(false)} PaperProps={{
            sx: { width: "472px" },
          }}>
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
                                <Typography variant="h4">New Evidence</Typography>
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
                                        <Typography variant="subtitle1">Title</Typography>
                                            <TextField
                                                {...nameField}
                                                error={Boolean(
                                                    get(errors, nameField.name)
                                                )}
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item sm={12}>
                                        <Typography variant="subtitle1">Course*</Typography>
                                            <CourseDropdown
                                                courses={courses}
                                            />
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
                                        <Typography variant="subtitle1">Image</Typography>
                                            <FileUploadCard
                                            
                                                onChange={handleFileUploadChange}
                                            />
                                        </Grid>
                                        <Grid item sm={12}>
                                        <FormControl>
                                            <FormLabel id="radio-buttons-group-label">Students*</FormLabel>
                                            <RadioGroup
                                                aria-label="Students"
                                                name="radio-buttons-group"
                                                value={selectedOption}
                                                onChange={handleRadioChange}
                                            >
                                                <FormControlLabel value="all" control={<Radio />} label="All" />
                                                <FormControlLabel value="specific" control={<Radio />} label="Specific Student(s)" />
                                            </RadioGroup>
                                            {selectedOption === 'specific' && (
                                                <FormControl>
                                                    <Select
                                                        value={selectedStudent}
                                                        onChange={handleStudentChange}
                                                        displayEmpty
                                                        fullWidth
                                                        inputProps={{ 'aria-label': 'Select student' }}
                                                    >
                                                        <MenuItem value="" disabled>Select Student</MenuItem>
                                                        <MenuItem value="student1">Student 1</MenuItem>
                                                        <MenuItem value="student2">Student 2</MenuItem>
                                                        <MenuItem value="student3">Student 3</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={12}>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <Typography variant="subtitle1">Objective(s)</Typography>
                                            <ObjectivesDropdown
                                                objectives={objectivesProp}
                                            />
                                            {/*
                                            <FormControl fullWidth>
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
                                        </Grid>*/}
                                    </Grid>
                                </Grid>
                                <Grid item sm={12}>
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
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="outlined"
                                onClick={handleSaveDraft}
                            >
                                Cancel
                            </Button>
                            <Button type="submit" variant="contained">
                                Save
                            </Button>
                        </DialogActions>
                    </form>
                </Box>
            </FormProvider>
        </Drawer>
    );
};

export default EvidenceDialog;
