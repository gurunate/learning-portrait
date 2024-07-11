"use client";

import { Box, Breadcrumbs, Button, Grid, Paper, TableContainer, Typography } from "@mui/material";
import { Suspense, useState } from "react"

import GradeSelect from "@/components/grade-select";
import Link from "next/link";
import Note from "@/components/note";
import ObjectivesTable from "@/components/tables/objectives-table";
import { objectives } from "@/lib/fixtures"

const Page = () => {
    const [hideNotes, setHideNotes] = useState(false);
    const evidence = objectives(10);

    const handleHideNotes = () => {
        setHideNotes(!hideNotes);
    }
    return (
        <section>
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/">
                    <Typography variant='subtitle2'>Portraits</Typography>
                </Link>
                <Link color="inherit" href="/evidence">
                    <Typography variant='subtitle2'>Course Name</Typography> 
                </Link>
                <Typography variant='subtitle2'>Person</Typography>
            </Breadcrumbs>
            <Box sx={{ margin: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Typography variant='h4'>Name</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <GradeSelect /> 
                    </Grid>
                    <Grid item xs={2}>
                        List of students
                    </Grid>
                    <Grid item xs={2} alignContent='right'>
                        Course Dropdown
                    </Grid>
                </Grid>
            </Box>
            <Box margin={4}>
                <Button variant='contained' onClick={handleHideNotes} sx={{ marginBlock: 2, float: 'right' }}>{`${hideNotes ? 'Show' : 'Hide'} Notes`}</Button>
                {!hideNotes ? (
                
                    <Grid container justifyContent='center' spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1'>Your notes</Typography>
                            <Note note='This is a note' dateCreated={new Date()} onDelete={() => {}} onEdit={() => {}} username='John Doe' role='teacher' width={684} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1'>Student notes</Typography>
                            <Note note='This is a note' dateCreated={new Date()} onDelete={() => {}} onEdit={() => {}} username='Jane Doe' role='student' width={684} />
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
