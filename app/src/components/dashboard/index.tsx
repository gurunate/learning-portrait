'use client';

import {
    FormControl,
    Grid,
    SelectChangeEvent,
} from '@mui/material';
import React, { SyntheticEvent, act } from 'react';
import {
    Course as TCourse,
    Objective as TObjective,
    Section as TSection,
    Student as TStudent
} from '@/types';

import CourseDropdown from '../course-dropdown';
import CourseTable from '../tables/course-table';
import { FieldValues } from 'react-hook-form';
import ObjectivesDropdown from '../objective-dropdown';

export type DashboardProps = {
    courses: TCourse[];
    loading?: boolean;
    students: TStudent[];
};

/**
 * @param {DashboardProps} props
 * @returns {JSX.Element}
 */
const Dashboard: React.FC<DashboardProps> = ({
    courses = [],
    loading = false,
    students = []
}: DashboardProps): JSX.Element => {
    const [openEvidenceDialog, setOpenEvidenceDialog] = React.useState(false);
    const [activeCourse, setActiveCourse] = React.useState<TCourse>(courses[0]);
    const [activeSection, setActiveSection] = React.useState<string>(activeCourse.sections[0].id);
    const [value, setValue] = React.useState<TObjective[]>(activeCourse.objectives || []);
    const [inputValue, setInputValue] = React.useState('');

    const handleAddEvidenceClick = () => {
        setOpenEvidenceDialog(true);
    };

    const handleAddEvidenceClose = () => {
        setOpenEvidenceDialog(false);
    };

    const handleCourseChange = (event: SelectChangeEvent) => {
        setActiveCourse(courses.find(course => course.sections.some(section => section.id === event.target.value)) || courses[0]);
        setValue(courses.find(course => course.sections.some(section => section.id === event.target.value))?.objectives || []);
       setActiveSection(event.target.value);
    };

    const handleObjectiveChange = (event: React.SyntheticEvent, newValue: TObjective[]) => {
        // Ensure event is not null and newValue is properly handled
        if (newValue !== null) {
            setValue(newValue);
        }
    };
    console.log(activeCourse)
    const handleSubmit = (data: FieldValues) => {
        console.log('handleSubmit', { data });
        setOpenEvidenceDialog(false);
    };
        
    if (loading) return <p>Loading...</p>;
    console.log(activeCourse)
    return (
        <>
            <Grid container alignItems="center" spacing={4}>
                <Grid item sm={12} md={3} sx={{ mx: '16px' }}>
                    <FormControl fullWidth>
                       <CourseDropdown data-testid='course-select' courses={courses} onChange={handleCourseChange} selectedValue={activeSection} />
                    </FormControl>
                </Grid>
                <Grid item sm={12} md={3}>
                    <FormControl fullWidth>
                       <ObjectivesDropdown 
                            objectives={activeCourse.objectives}
                            value={value} 
                            onHandleChange={handleObjectiveChange}
                            inputValue={inputValue}
                            onHandleInputChange={(event, val) => setInputValue(val)}
                        />
                    </FormControl>
                </Grid>
                {/*<Grid item md={6}>
                    <Stack
                        direction="row"
                        justifyContent="flex-end"
                        spacing={2}
                    >
                        <Button variant="outlined" size="large">
                            View Evidence
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleAddEvidenceClick}
                        >
                            Add Evidence
                        </Button>
                    </Stack>
                </Grid>*/}
                <Grid item md={12} sx={{ height: '70vh', overflow: 'scroll'}}>
                    <CourseTable
                        course={activeCourse} 
                        objectives={value || activeCourse.objectives}
                        students={students}
                        hasSubObjectives={value.find(obj => obj.parentId !== null) ? true : false}
                    />
                </Grid>
            </Grid>
            {/*<EvidenceDialog
                open={openEvidenceDialog}
                onClose={handleAddEvidenceClose}
                courses={courses}
                objectives={courses[0]?.objectives}
                onSubmit={handleSubmit}
            />*/}
        </>
    );
};

export default Dashboard;
