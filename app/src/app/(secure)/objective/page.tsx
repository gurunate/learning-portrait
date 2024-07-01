"use client";

import { Box, Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import { Suspense, useState } from "react"

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
            <Box sx={{ paddingBlock: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <Typography variant='h4'>Name</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        Grade Select
                    </Grid>
                    <Grid item xs={2}>
                        List of students
                    </Grid>
                    <Grid item xs={2}>
                        Course Dropdown
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ paddingBlock: 4 }}>
                <Button variant='contained' onClick={handleHideNotes} sx={{ marginBlock: 2, float: 'right' }}>{`${hideNotes ? 'Show' : 'Hide'} Notes`}</Button>
                {!hideNotes ? (
                
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1'>Your notes</Typography>
                            <Note note={{ body: 'This is a note', dateCreated: new Date() }} onDelete={() => {}} onEdit={() => {}} user={{ name: 'John Doe', role: 'teacher' }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='subtitle1'>Student notes</Typography>
                            <Note note={{ body: 'This is a note', dateCreated: new Date() }} onDelete={() => {}} onEdit={() => {}} user={{ name: 'Jane Doe', role: 'student' }} />
                        </Grid>
                    </Grid>
                ) : null }
            </Box>
            <Suspense fallback={<p>Loading...</p>}>
                <ObjectivesTable objectives={evidence} />
            </Suspense>
        </section>
    )
}

export default Page;
