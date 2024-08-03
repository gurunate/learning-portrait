'use client';

import { Box, Breadcrumbs, Grid, IconButton, SvgIcon, Typography } from '@mui/material';
import { Suspense, useState } from 'react'
import { courses, evidenceList, objectives, students } from '@/lib/fixtures'

import CourseDropdown from '@/components/course-dropdown';
import CourseTable from '@/components/tables/course-table';
import Link from 'next/link';
import { faker } from '@faker-js/faker';

const Page = () => {
    const [showEvidenceDrawer, setShowEvidenceDrawer] = useState(false);
    const course = courses(1)[0];
    const courseName = course.name;

    const evidenceDetail = evidenceList(1)[0];

    return (
        <section>
            <Box sx={{ marginInline: 4 }}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link color='inherit' href='/dashboard'>
                        <Typography variant='subtitle2'>Portraits</Typography>
                    </Link>
                    <Link color='inherit' href='/evidence'>
                        <Typography variant='subtitle2'>{courseName}</Typography> 
                    </Link>
                    <Typography variant='subtitle2'>{evidenceDetail.name}</Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={{ margin: 6 }}>
                <Grid container>
                    <Grid container lg={6}>
                        <Grid item xs={6}>
                            <Typography variant='h4' sx={{display: 'flex', alignItems: 'baseline'}}>
                                {evidenceDetail.name}
                                <IconButton aria-label='edit'>
                                <SvgIcon sx={{fill: 'none'}}>
                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" strokeWidth={1.5} stroke='currentColor' xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.862 3.487L16.549 1.799C16.9007 1.44733 17.3777 1.24976 17.875 1.24976C18.3723 1.24976 18.8493 1.44733 19.201 1.799C19.5527 2.15068 19.7502 2.62766 19.7502 3.125C19.7502 3.62235 19.5527 4.09933 19.201 4.451L8.582 15.07C8.05332 15.5984 7.40137 15.9867 6.685 16.2L4 17L4.8 14.315C5.01328 13.5986 5.40163 12.9467 5.93 12.418L14.862 3.487ZM14.862 3.487L17.5 6.125M16 13V17.75C16 18.3467 15.7629 18.919 15.341 19.341C14.919 19.763 14.3467 20 13.75 20H3.25C2.65326 20 2.08097 19.763 1.65901 19.341C1.23705 18.919 1 18.3467 1 17.75V7.25C1 6.65327 1.23705 6.08097 1.65901 5.65901C2.08097 5.23706 2.65326 5 3.25 5H8" stroke="#006C96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </SvgIcon>
                            </IconButton>
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid container lg={6} justifyContent={'flex-end'} spacing={2}>
                        <Grid item xs={3}>
                            <CourseDropdown courses={[]} selectedValue={''} />
                        </Grid>
                        <Grid item xs={3} alignContent='right'>
                            <CourseDropdown courses={[]} selectedValue={''} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Typography variant='body1' pb={2}>
                            <strong>Date: </strong>{new Date().toLocaleDateString()}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography variant='body1'>
                            <strong>Note: </strong>{faker.lorem.paragraph()}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Suspense fallback={<p>Loading...</p>}>
                <CourseTable course={course} students={students(13)} objectives={course.objectives} />
            </Suspense>
        </section>
    )
}

export default Page;
