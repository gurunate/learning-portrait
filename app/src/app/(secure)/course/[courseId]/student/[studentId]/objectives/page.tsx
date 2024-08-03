'use client';

import { Box, Breadcrumbs, Button, Grid, Paper, SelectChangeEvent, Typography } from '@mui/material';
import { Suspense, useState } from 'react'

import CourseDropdown from '@/components/course-dropdown';
import GradeSelect from '@/components/grade-select';
import Link from 'next/link';
import Note from '@/components/note';
import ObjectivesTable from '@/components/tables/objectives-table';
import { faker } from '@faker-js/faker';
import { objectives } from '@/lib/fixtures'

const Page = () => {
    const [hideNotes, setHideNotes] = useState(false);
    const evidence = objectives(10);
    const courseName = 'Math - Division';
    const username = faker.person.firstName() + ' ' + faker.person.lastName();

    const handleHideNotes = () => {
        setHideNotes(!hideNotes);
    }

    return (
        <section>
            <Box sx={{ marginInline: 4 }}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link color='inherit' href='/dashboard'>
                        <Typography variant='subtitle2'>Portraits</Typography>
                    </Link>
                    <Typography variant='subtitle2'>{courseName}</Typography> 
                    <Typography variant='subtitle2'>{username}</Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={{ margin: 6 }}>
                <Grid container spacing={2}>
                    <Grid container lg={6}>
                        <Grid item xs={5}>
                            <Typography variant='h4'>{username}</Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <GradeSelect /> 
                        </Grid>
                    </Grid>
                    <Grid container lg={6} justifyContent={'flex-end'} spacing={2}>
                        <Grid item xs={3}>
                            <CourseDropdown courses={[]} onChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } } selectedValue={''} />
                        </Grid>
                        <Grid item xs={3} alignContent='right'>
                            <CourseDropdown courses={[]} onChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } } selectedValue={''} />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant='contained' onClick={handleHideNotes} sx={{ marginBlock: 2, float: 'right' }}>{`${hideNotes ? 'Show' : 'Hide'} Notes`}</Button>
                    </Grid>
                </Grid>
            </Box>
           
            <Box margin={4}>
                {!hideNotes ? (                
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' p={1}>Your notes</Typography>
                            <Note note={faker.lorem.paragraphs(3)} dateCreated={new Date()} onDelete={() => {}} onEdit={() => {}} username={`${faker.person.firstName()} ${faker.person.lastName()}`} role='teacher' width={684} showChip={false} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1' p={1}>Student notes</Typography>
                            <Note note={faker.lorem.paragraphs(3)} dateCreated={new Date()} onDelete={() => {}} onEdit={() => {}} username={username} role='student' width={684} showChip={false} />
                        </Grid>
                    </Grid>
                ) : null }
            </Box>
            <Suspense fallback={<p>Loading...</p>}>
                <Paper sx={{ margin: 4, border: '1px solid #E7EAEC' }}>
                    <ObjectivesTable objectives={evidence} />
                </Paper>
            </Suspense>
        </section>
    )
}

export default Page;
