'use client';

import { Box, Breadcrumbs, Button, Grid, IconButton, Paper, SelectChangeEvent, SvgIcon, Typography } from '@mui/material';
import ObjectivesTable, { COLOR_MAP } from '@/components/tables/objectives-table';
import { Suspense, useState } from 'react'
import { courses, evidenceList, notes, objectives, students } from '@/lib/fixtures'

import CourseDropdown from '@/components/course-dropdown';
import CourseTable from '@/components/tables/course-table';
import Link from 'next/link';
import MasonryGrid from '@/components/masonry-grid';
import Rating from '@/components/rating';
import RatingSelect from '@/components/rating-select';
import SubObjectivesTable from '@/components/tables/subobjective-table';
import { faker } from '@faker-js/faker';

const Page = () => {
    const [showEvidenceDrawer, setShowEvidenceDrawer] = useState(false);
    const course = courses(1)[0];
    const courseName = course.name;

    const evidenceDetail = evidenceList(1)[0];
    const notesGrid = notes(7);

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
                    <Typography variant='subtitle2'>{evidenceDetail.name}</Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={{ margin: 6 }}>
                {/*<Grid container>
                    <Grid container lg={6} justifyContent={'flex-end'} spacing={2}>
                        <Grid item xs={3}>
                            <CourseDropdown courses={[]} onHandleChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } } value={''} />
                        </Grid>
                        <Grid item xs={3} alignContent='right'>
                            <CourseDropdown courses={[]} onHandleChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } } value={''} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <MasonryGrid columns={5} notes={notesGrid}/>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='body1'>
                            <strong>Note: </strong>{faker.lorem.paragraph()}
                        </Typography>
                    </Grid>
                </Grid>*/}
                <Grid container>
                <Grid container lg={6} justifyContent={'flex-end'} spacing={2}>
                        <Grid item xs={3}>
                            <CourseDropdown courses={[]} onHandleChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } } value={''} />
                        </Grid>
                        <Grid item xs={3} alignContent='right'>
                            <CourseDropdown courses={[]} onHandleChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } } value={''} />
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
