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

import Link from 'next/link';
import { faker } from '@faker-js/faker';

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
            objectiveShortName: 'Add',
            notes: faker.lorem.sentence(25),
            evidenceId: '1234567',
            courseId: 'abcd1234'
        },
        {
            value: 2,
            key: 'C',
            name: 'Complete',
            description: 'Evidence is submitted',
            date: '2021-10-01',
            course: 'Math',
            objectives: 'Ratios & Proportions',
            objectiveShortName: 'R&P',
            notes: 'Good job!  You are off to a great start!',
            evidenceId: '89101112',
            courseId: 'efghi1234'
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
                            <TableCell />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({ value, key, name, description, date, course, notes, objectives, objectiveShortName, evidenceId, courseId }, idx) => (
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
                                    <Typography variant='body1'><strong>{objectiveShortName}:</strong>{objectives}</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Tooltip title={notes}>
                                        <Typography sx={{ 
                                            maxWidth: 250, 
                                            textOverflow: 'ellipsis', 
                                            overflow: 'hidden',
                                            whiteSpace: 'nowrap',
                                            }} 
                                            variant='body1'
                                        >
                                            {notes}
                                        </Typography>
                                    </Tooltip>
                                </TableCell>
                                <TableCell align="right">
                                    <Link
                                        href={`/course/${courseId}/evidence/${evidenceId}/details`}
                                    >
                                        <Button variant='text'>
                                            <Typography variant='body1'>Score</Typography>
                                        </Button>
                                    </Link>
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
