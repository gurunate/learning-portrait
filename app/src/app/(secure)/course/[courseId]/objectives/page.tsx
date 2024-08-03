'use client';

import { Box, Breadcrumbs, Button, FormControl, Grid, MenuItem, Paper, Select, SelectChangeEvent, Typography } from '@mui/material';
import ObjectivesTable, { COLOR_MAP } from '@/components/tables/objectives-table';
import { Suspense, useState } from 'react'

import CourseDropdown from '@/components/course-dropdown';
import EvidenceDialog from '@/components/dialogs/evidence';
import Link from 'next/link';
import ObjectiveSelect from '@/components/objective-select/objective-select';
import ObjectivesDropdown from '@/components/objective-dropdown';
import Rating from '@/components/rating';
import RatingSelect from '@/components/rating-select';
import { Router } from 'next/router';
import SubObjectivesTable from '@/components/tables/subobjective-table';
import { faker } from '@faker-js/faker';
import { objectives } from '@/lib/fixtures';

const Page = () => {
    const [showEvidenceDrawer, setShowEvidenceDrawer] = useState(false);
    const courseName = 'Math - Division';
    const username = faker.person.firstName() + ' ' + faker.person.lastName();
    const courseObjectives = objectives(12);
    const objective = courseObjectives[0];
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
                    <Typography variant='subtitle2'>{objective.name}</Typography>
                </Breadcrumbs>
            </Box>
            <Box sx={{ margin: 6 }}>
                <Grid container spacing={2}>
                    <Grid container lg={6}>
                        <Grid item xs={5}>
                            <ObjectiveSelect courseObjectives={courseObjectives} />
                            <Typography variant='body1'>{objective.description}</Typography>
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
                        <Rating label={COLOR_MAP[teacherRating].label} variant='filled' color={COLOR_MAP[teacherRating].color} />
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
