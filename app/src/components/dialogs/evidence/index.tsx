'use client';

import {
    Box,
    Button,
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
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    Switch,
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
import { DevTool } from '@hookform/devtools';
import Editor from '../../editor';
import FileUploadCard from '../../file-upload-card';
import ObjectivesDropdown from '@/components/objective-dropdown';
import StudentsDropdown from '@/components/students-dropdown';
import { Student as TStudents } from '@/types';
import { evidenceSchema } from './schema';
import { get } from 'lodash';
import { yupResolver } from '@hookform/resolvers/yup';

export { evidenceSchema } from './schema';
export type { EvidenceFormValues } from './schema';

export type EvidenceDialogProps = DialogProps & {
    selectAllStudents: boolean;
    courses: TCourse[];
    students: TStudents[] | undefined;
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
    selectAllStudents = true,
    objectives: objectivesProp,
    courses = [],
    students = [],
    onClose,
    onError,
    onSubmit,
    open
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

    // Student Switch Logic
    const handleSwitchChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
        setAllStudentsSelected(event.target.checked);
        // Clear the selected student when switching to 'All'
        if (event.target.checked) {
            setSelectedStudent('');
        }
    };
    const [allStudentsSelected, setAllStudentsSelected] = useState(true);
    const [selectedStudent, setSelectedStudent] = useState('')

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

    const [activeCourse, setActiveCourse] = React.useState<TCourse>(courses[0]);
    const handleCourseChange = (event: SelectChangeEvent) => {
        setActiveCourse(courses.filter(course => course.id === event.target.value)[0]);
    };

    return (
        <Drawer open={open} anchor="right" onClose={toggleDrawer(false)} PaperProps={{
            sx: { width: "472px", borderRadius: '0px' },
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
                                sx={{padding: '0px'}}
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
                                                onChange={handleCourseChange} 
                                                selectedValue={activeCourse.id}
                                                courses={courses}
                                            />
                                        </Grid>
                                        <Grid item sm={12}>
                                        <FormControl fullWidth>
                                            <Grid component="label" container alignItems="center" spacing={1}>
                                                <FormLabel id="switch-label" sx={{paddingLeft: '10px'}}>Students: </FormLabel>
                                                <FormControlLabel control={
                                                    <Switch 
                                                        defaultChecked={selectAllStudents}
                                                        checked={allStudentsSelected}
                                                        onChange={handleSwitchChange}
                                                    />} label="All"sx={{paddingLeft: '5px'}} />
                                            </Grid>
                                            {allStudentsSelected === false && (
                                                <FormControl>
                                                    <StudentsDropdown
                                                        students={students}
                                                    />
                                                </FormControl>
                                            )}
                                            </FormControl>
                                        </Grid>
                                        <Grid item sm={12}>
                                            <Typography variant="subtitle1">Objective(s)</Typography>
                                            <ObjectivesDropdown
                                                objectives={objectivesProp}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item sm={12}>
                                            <FileUploadCard
                                            
                                                onChange={handleFileUploadChange}
                                            />
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
        </Drawer>
    );
};

export default EvidenceDialog;
