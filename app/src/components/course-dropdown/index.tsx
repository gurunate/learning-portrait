'use client';

import {
    FormControl,
    ListSubheader,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography,
} from '@mui/material';

import React from 'react';
import { Course as TCourse } from '@/types';

export type CourseSelectProps = {
    courses: TCourse[];
    onHandleChange?: (event: SelectChangeEvent) => void;
    value?: string;
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
                        .map(({id, name, sections }) => (
                            <>
                                <ListSubheader key={id}>
                                    <Typography variant='body1' sx={{ fontWeight: 'bold' }}>{name}</Typography>
                                </ListSubheader>
                                {sections.map((section) => (
                                    <MenuItem key={section.id} value={section.id} sx={{ paddingInlineStart: 5 }}>
                                        <Typography variant='body1'>{section.name}</Typography>
                                    </MenuItem>
                                ))}
                            </>
                        ))}
                </Select>
            </FormControl>
        </>
    );
};
export default CourseDropdown;
