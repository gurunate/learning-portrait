import {
    Button,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { objectives } from '@/lib/fixtures';

export type EvidenceTableProps = unknown;

/**
 * @param {EvidenceTableProps} props
 * @returns {JSX.Element}
 */
const EvidenceTable: React.FC<EvidenceTableProps> = (
    props: EvidenceTableProps
): JSX.Element => {
    const rows = [
        {
            value: 1,
            key: 'I',
            name: 'Incomplete',
            description: 'Evidence is not complete',
            date: '2021-10-01',
            course: 'Math',
            objectives: 'Addition',
            notes: 'Needs more information'
        },
        {
            value: 2,
            key: 'C',
            name: 'Complete',
            description: 'Evidence is submitted',
            date: '2021-10-01',
            course: 'Math',
            objectives: 'Ratios & Proportions',
            notes: 'Good job'
        }
    ];

    const COLOR_MAP = ['error', 'success'];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" width={250}>
                                <Typography variant='subtitle1'
                                >Date</Typography>
                            </TableCell>
                            <TableCell align="left"><Typography variant='subtitle1'>Evidence</Typography></TableCell>
                            <TableCell align="left"><Typography variant='subtitle1'>Course</Typography></TableCell>
                            <TableCell align="left"><Typography variant='subtitle1'>Objectives</Typography></TableCell>
                            <TableCell align="left"><Typography variant='subtitle1'>Notes</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({ value, key, name, description, date, course, notes, objectives }, idx) => (
                            <TableRow key={value}>
                                <TableCell variant="head" align="left">
                                    <Typography variant='body1'>{date}</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant='body1'>{description}</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant='body1'>{course}</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant='body1'>{objectives}</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography variant='body1'>{notes}</Typography>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
};

export default EvidenceTable;
