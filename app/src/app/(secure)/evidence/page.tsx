import { Box, Button, Grid, Paper, SelectChangeEvent, Typography } from "@mui/material";
import { Suspense, useState } from "react"
import { fetchQuery, gql } from "@/lib/fetch-client";

import CourseDropdown from "@/components/course-dropdown";
import EvidenceTable from "@/components/tables/evidence-table";

const PAGE_LOAD_QUERIES = gql`
    query Courses {
        courses {
            id
            name
            objectives {
                name
                id
            }
        }
    }
`;

const Page = async () => {
    const { data } = await fetchQuery(PAGE_LOAD_QUERIES);

    const { courses } = data ?? {};
    
     return (
         <section>
             <Box sx={{ padding: 4 }}>
                 <Grid container justifyContent='space-between' spacing={2}>
                     <Grid item xs={2}>
                         <Typography variant='h4' color='primary'>Evidence</Typography>
                     </Grid>
                     <Grid item xs={2}>
                         <CourseDropdown courses={courses} onHandleChange={function (event: SelectChangeEvent): void {
                             throw new Error("Function not implemented.");
                         } } value={""} />
                     </Grid>
                 </Grid>
             </Box>
             <Box sx={{ paddingInline: 4, paddingBlock: 8 }}>
                 <Button variant='contained' sx={{ marginBlock: 2, float: 'right' }}>Add Evidence</Button>
             </Box>
             <Suspense fallback={<p>Loading...</p>}>
                <Paper sx={{ margin: 4, border: '1px solid #E7EAEC' }}>
                    <EvidenceTable />
                </Paper>
             </Suspense>
         </section>
     )
 }

 export default Page;
