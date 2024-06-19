'use client';

import { Autocomplete, FormControl, Select, TextField } from "@mui/material";

import React from "react";
import { Course as TCourse } from '@/types';

export type CourseSelectProps ={
    courses: TCourse[];
}

const CourseSelect: React.FC<CourseSelectProps> = ({
    courses = []
}: CourseSelectProps): JSX.Element => {

return(
    <>
<Autocomplete
  disablePortal
  id="course-label"
  options={courses[0]?.id}
  sx={{ width: 300 }}
  freeSolo
  renderInput={(params) => <TextField {...params} label="Course" />}
/>


<FormControl fullWidth>
<Select
    labelId="course-label"
    id="course"
    value={courses[0]?.id}
    aria-label="Courses"
>
    {courses.map(({ id, name }) => (
        <MenuItem key={id} value={id}>
            {name}
        </MenuItem>
    ))}
</Select>
</FormControl>
</>);
};
