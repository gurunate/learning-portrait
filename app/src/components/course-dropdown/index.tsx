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
    onHandleChange: (event: SelectChangeEvent) => void;
    value: string;
};

const CourseDropdown: React.FC<CourseSelectProps> = ({
    courses = [],
    onHandleChange,
    value,
}: CourseSelectProps): JSX.Element => {
    return (
        <>
            <FormControl fullWidth>
                <Select
                    labelId="course-label"
                    id="course"
                    value={value}
                    aria-label="Courses"
                    onChange={onHandleChange}
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
