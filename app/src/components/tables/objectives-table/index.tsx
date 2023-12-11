import {
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material';

import { Objective as TObjective } from '@/types/objective';

export type ObjectivesTableProps = {
    objectives: TObjective[];
};

/**
 * @param {ObjectivesTableProps} props
 * @returns {JSX.Element}
 */
const ObjectivesTable: React.FC<ObjectivesTableProps> = ({
    objectives
}: ObjectivesTableProps): JSX.Element => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Table sx={{ minWidth: 650 }} aria-label="objectives table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left" width={250}>
                            Name
                        </TableCell>
                        <TableCell align="left">Abbrv</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell width={100} />
                    </TableRow>
                </TableHead>
                <TableBody>
                    {objectives.map(({ id, key, name, description }) => (
                        <TableRow key={id}>
                            <TableCell variant="head" align="left">
                                {name}
                            </TableCell>
                            <TableCell align="left">{key}</TableCell>
                            <TableCell align="left">{description}</TableCell>
                            <TableCell align="right">
                                <Button variant="outlined">View</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Grid>
        <Grid item xs={12} textAlign="right">
            <Button variant="contained" size="large">
                Add
            </Button>
        </Grid>
    </Grid>
);

export default ObjectivesTable;
