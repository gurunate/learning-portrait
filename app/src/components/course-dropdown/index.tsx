'use client';

import {
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';

import React from 'react';
import { Course as TCourse } from '@/types';

export type CourseSelectProps = {
    courses: TCourse[];
};

const CourseDropdown: React.FC<CourseSelectProps> = ({
    courses = [],
}: CourseSelectProps): JSX.Element => {
    const [course, setCourse] = React.useState(courses[0].name);

    const handleChange = (event: SelectChangeEvent) => {
        setCourse(event.target.value as string);
    };

    return (
        <>
            <FormControl fullWidth>
                <Select
                    labelId="course-label"
                    id="course"
                    value={courses[0].id}
                    aria-label="Courses"
                    onChange={handleChange}
                    sx={{
                        borderRadius: '4px',
                        border: '1px solid #D5D9DB',
                    }}
                >
                    {courses
                        .slice()
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(({ id, name }) => (
                            <MenuItem key={id} value={id}>
                                {name}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
        </>
    );
};
export default CourseDropdown;
