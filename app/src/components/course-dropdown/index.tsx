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
    onChange?: (event: SelectChangeEvent) => void;
    value?: string;
};

const CourseDropdown: React.FC<CourseSelectProps> = ({
    courses = [],
    onChange,
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
                    onChange={onChange}
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
                                {sections.map(({ id, name }) => (
                                    <MenuItem key={id} value={id} sx={{ paddingInlineStart: 5 }}>
                                        <Typography variant='body1'>{name}</Typography>
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
