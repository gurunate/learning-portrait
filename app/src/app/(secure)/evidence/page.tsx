import { Box, Button, Grid, Typography } from "@mui/material";
import { Suspense, useState } from "react"

import EvidenceTable from "@/components/tables/evidence-table";

const Page = () => {

     return (
         <section>
             <Box sx={{ paddingBlock: 4 }}>
                 <Grid container justifyContent='space-between' spacing={2}>
                     <Grid item xs={2}>
                         <Typography variant='h4' color='primary'>Evidence</Typography>
                     </Grid>
                     <Grid item xs={2}>
                         Course Dropdown
                     </Grid>
                 </Grid>
             </Box>
             <Box sx={{ paddingBlock: 4 }}>
                 <Button variant='contained' sx={{ marginBlock: 2, float: 'right' }}>Add Evidence</Button>
             </Box>
             <Suspense fallback={<p>Loading...</p>}>
                 <EvidenceTable />
             </Suspense>
         </section>
     )
 }

 export default Page;
