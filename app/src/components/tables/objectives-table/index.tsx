import {
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

import Rating from '@/components/rating';
import RatingSelect from '@/components/rating-select';
import { Objective as TObjective } from '@/types';
import { faker } from '@faker-js/faker';

export type ObjectivesTableProps = {
    objectives: TObjective[];
};

export const COLOR_MAP: { [key: string]: { color: 'error' | 'success' | 'info' | 'warning' | 'default' | 'primary' | 'secondary'; label: string } } = {
        'T': {
            color: 'error',
            label: 'Needs help',
        },
        'M': {
            color: 'success',
            label: 'Mastery',
        },
        'A': {
            color: 'info',
            label: 'Approaching',
        },
        'E': {
            color: 'warning',
            label: 'Not yet',
        }
    };

const uploaded = new Date();
const studentRating = faker.helpers.arrayElement(['T', 'M', 'A', 'E']);
const teacherRating = faker.helpers.arrayElement(['T', 'M', 'A', 'E']);
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
                            <TableCell align='left' width={150}>
                                <Typography variant='subtitle1'>Last Updated</Typography>
                            </TableCell>
                            <TableCell align='left'>
                                <Typography variant='subtitle1'>Objective</Typography>
                            </TableCell>
                            <TableCell width={100}>
                                <Typography variant='subtitle1'>Student</Typography>
                            </TableCell>
                            <TableCell width={100}>
                                <Typography variant='subtitle1'>Teacher</Typography>
                            </TableCell>
                            <TableCell width={100} />
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {objectives.map(({ id, key, name, description }) => (
                        <TableRow key={id}>
                                <TableCell variant='head' align='left'>
                                    <Typography variant='body1'>{uploaded?.toLocaleDateString()}</Typography>
                                </TableCell>
                                <TableCell align='left'>
                                    <Typography variant='body1' sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Typography variant='body1'>{description}</Typography>
                                </TableCell>
                                <TableCell align='left'>
                                    <Rating label={COLOR_MAP[studentRating].label} variant='filled' color={COLOR_MAP[studentRating].color}  />
                                </TableCell>
                                <TableCell align='left'>
                                    <RatingSelect defaultValue={COLOR_MAP[teacherRating].label} />
                                </TableCell>
                                <TableCell align='right'>
                                    <Tooltip title='Open'>
                                        <Button variant='text' size='small'>
                                            Open
                                        </Button>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Grid>
    </Grid>
);

export default ObjectivesTable;

{/*
    import {
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

import Rating from '@/components/rating';
import { Evidence as TEvidence } from '@/types';

export type EvidenceTableProps = {
    evidence: TEvidence[];
}

const EvidenceTable: React.FC<EvidenceTableProps> = (
    { evidence }: EvidenceTableProps
): JSX.Element => {

    const COLOR_MAP: { [key: string]: { color: 'error' | 'success' | 'info' | 'warning' | 'default' | 'primary' | 'secondary'; label: string } } = {
        'T': {
            color: 'error',
            label: 'Needs help',
        },
        'M': {
            color: 'success',
            label: 'Mastery',
        },
        'A': {
            color: 'info',
            label: 'Approaching',
        },
        'E': {
            color: 'warning',
            label: 'Not yet',
        }
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Table sx={{ minWidth: 650 }} aria-label='evidence table'>
                    <TableHead>
                        <TableRow>
                            <TableCell align='left' width={150}>
                                <Typography variant='subtitle1'>Last Updated</Typography>
                            </TableCell>
                            <TableCell align='left'>
                                <Typography variant='subtitle1'>Objective</Typography>
                            </TableCell>
                            <TableCell width={100}>
                                <Typography variant='subtitle1'>Student</Typography>
                            </TableCell>
                            <TableCell width={100}>
                                <Typography variant='subtitle1'>Teacher</Typography>
                            </TableCell>
                            <TableCell width={100} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {evidence.map(({ name, description, studentRating, teacherRating, uploaded }, idx) => (
                            <TableRow key={idx}>
                                <TableCell variant='head' align='left'>
                                    <Typography variant='body1'>{uploaded?.toLocaleDateString()}</Typography>
                                </TableCell>
                                <TableCell align='left'>
                                    <Typography variant='body1' sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Typography variant='body1'>{description}</Typography>
                                </TableCell>
                                <TableCell align='left'>
                                    <Rating label={COLOR_MAP[studentRating].label} variant='filled' color={COLOR_MAP[studentRating].color}  />
                                </TableCell>
                                <TableCell align='left'>
                                    <Rating label={COLOR_MAP[teacherRating].label} variant='filled' color={COLOR_MAP[teacherRating].color}  />
                                </TableCell>
                                <TableCell align='right'>
                                    <Tooltip title='More'>
                                        <Button variant='text' size='small'>
                                            Open
                                        </Button>
                                    </Tooltip>
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
 */}
