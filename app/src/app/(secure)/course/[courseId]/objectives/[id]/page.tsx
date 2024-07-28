'use client';

import { Box, Breadcrumbs, Button, Grid, Paper, SelectChangeEvent, Typography } from '@mui/material';
import ObjectivesTable, { COLOR_MAP } from '@/components/tables/objectives-table';
import { Suspense, useState } from 'react'

import CourseDropdown from '@/components/course-dropdown';
import Link from 'next/link';
import Rating from '@/components/rating';
import RatingSelect from '@/components/rating-select';
import SubObjectivesTable from '@/components/tables/subobjective-table';
import { faker } from '@faker-js/faker';
import { objectives } from '@/lib/fixtures'

const Page = () => {
    const [showEvidenceDrawer, setShowEvidenceDrawer] = useState(false);
    const courseName = 'Math - Division';
    const username = faker.person.firstName() + ' ' + faker.person.lastName();
    const objective = objectives(1)[0];
    const subObjectives = objectives(3);

    const studentRating = faker.helpers.arrayElement(['T', 'M', 'A', 'E']);
    const teacherRating = faker.helpers.arrayElement(['T', 'M', 'A', 'E']);

    const handleAddEvidence = () => {
        setShowEvidenceDrawer(!showEvidenceDrawer);
    }

    return (
        <section>
            <Box sx={{ marginInline: 4 }}>
                <Breadcrumbs aria-label='breadcrumb'>
                    <Link color='inherit' href='/dashboard'>
                        <Typography variant='subtitle2'>Portraits</Typography>
                    </Link>
                    <Typography variant='subtitle2'>{courseName}</Typography> 
                    <Link href="#" color="inherit">
                        <Typography variant='subtitle2'>{username}</Typography>
                    </Link>
                    <Typography variant='subtitle2'>{objective.name}</Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={{ margin: 6 }}>
                <Grid container spacing={2}>
                    <Grid container lg={6}>
                        <Grid item xs={12}>
                            <Typography variant='h4'>{objective.name}</Typography>
                            <Typography variant='body1'>{objective.description}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container lg={6} justifyContent={'flex-end'} spacing={2}>
                        <Grid item xs={6}>
                            <CourseDropdown courses={[]} onChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } } selectedValue={''} />
                        </Grid>
                        <Grid item xs={6} alignContent='right'>
                            <CourseDropdown courses={[]} onChange={function (event: SelectChangeEvent): void {
                                throw new Error('Function not implemented.');
                            } } selectedValue={''} />
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
           
            <Box margin={4}>              
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <Typography variant='subtitle1' p={1}>Student:</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Rating label={COLOR_MAP[studentRating].label} variant='filled' color={COLOR_MAP[studentRating].color}  />
                    </Grid>
                    <Grid item xs={1}>
                        <Typography variant='subtitle1' p={1}>Teacher:</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <RatingSelect defaultValue={COLOR_MAP[teacherRating].label} />
                    </Grid>
                    <Grid item xs={8}>
                        <Button variant='contained' onClick={handleAddEvidence} sx={{ marginBlock: 2, float: 'right' }}>
                            + Add Evidence
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Suspense fallback={<p>Loading...</p>}>
                <Paper sx={{ margin: 4, border: '1px solid #E7EAEC' }}>
                    <SubObjectivesTable subObjectives={subObjectives} />
                </Paper>
            </Suspense>
        </section>
    )
}

export default Page;
