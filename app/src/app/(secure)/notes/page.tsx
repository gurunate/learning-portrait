'use client';

import { Box, Breadcrumbs, Button, Grid, IconButton, Paper, SelectChangeEvent, SvgIcon, Typography } from '@mui/material';
import { Suspense, useState } from 'react'
import { courses, notes, student } from '@/lib/fixtures'

import AddNoteDialog from '@/components/dialogs/add-note';
import CourseDropdown from '@/components/course-dropdown';
import { FieldValues } from 'react-hook-form';
import Link from 'next/link';
import MasonryGrid from '@/components/masonry-grid';
import StudentsDropdown from '@/components/students-dropdown';
import { faker } from '@faker-js/faker';
import { width } from '@mui/system';

const Page = () => {
    const [showEvidenceDrawer, setShowEvidenceDrawer] = useState(false);
    const course = courses(1)[0];
    const courseName = course.name;

    const notesGrid = notes(7);
    const studentName = student()

    const handleSubmit = (data: FieldValues) => {
        console.log('handleSubmit', { data });
    };

    return (
        <section>
            <Box sx={{ marginInline: 4 }}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link color='inherit' href='/'>
                        <Typography variant='subtitle2'>Portraits</Typography>
                    </Link>
                    <Link color='inherit' href='/evidence'>
                        <Typography variant='subtitle2'>{courseName}</Typography> 
                    </Link>
                    <Typography variant='subtitle2'>{`${studentName.firstName} ${studentName.lastName}`}</Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={{ margin: 6 }}>
                <Grid container>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant='h2'>
                                    {`${studentName.firstName} ${studentName.lastName}`}
                                </Typography>
                            </Grid>
                        <Grid item xs={3}>
                            <StudentsDropdown students={[]} onHandleChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } }/>
                        </Grid>
                        <Grid item xs={3}>
                            <CourseDropdown courses={[]} onHandleChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } } value={''} />
                        </Grid>
                        <Grid item>
                            <AddNoteDialog open={false} onSubmit={handleSubmit}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Suspense fallback={<p>Loading...</p>}>
                <MasonryGrid columns={3} notes={notesGrid}/>
            </Suspense>
        </section>
    )
}

export default Page;
