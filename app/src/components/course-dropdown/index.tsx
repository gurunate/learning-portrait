'use client';

import {
    FormControl,
    ListSubheader,
    MenuItem,
    Select,
    SelectChangeEvent,
    Typography
} from '@mui/material';
import {
    Course as TCourse,
    Section as TSection,
} from '@/types';

import React from 'react';

export type CourseSelectProps = {
    courses: TCourse[];
    selectedValue: string;
    onChange?: (event: SelectChangeEvent<string>) => void;
};

const CourseDropdown: React.FC<CourseSelectProps> = ({
    courses = [],
    selectedValue,
    onChange,
}: CourseSelectProps): JSX.Element => {
    // Create an array to hold all children elements
    const selectItems = courses.flatMap(({ id, name, sections }) => [
        <ListSubheader key={`header-${id}`}>
            <Typography variant='body1' sx={{ fontWeight: 'bold' }}>
                {name}
            </Typography>
        </ListSubheader>,
        ...sections.map(({ id: sectionId, name: sectionName }) => (
            <MenuItem key={sectionId} value={sectionId} sx={{ paddingInlineStart: 5 }}>
                <Typography variant='body1'>{sectionName}</Typography>
            </MenuItem>
        ))
    ]);

    return (
        <FormControl fullWidth>
            <Select
                labelId="course-label"
                id="course"
                value={selectedValue || ''}
                aria-label="Courses"
                onChange={onChange}
                sx={{
                    borderRadius: '4px',
                    border: '1px solid #D5D9DB',
                    width: '273px',
                }}
            >
                {selectItems}
            </Select>
        </FormControl>
    );
};

export default CourseDropdown;
