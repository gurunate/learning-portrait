'use client';

import {
    Avatar,
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography
} from '@mui/material';

import Link from '@/components/link';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RatingSelect from '@/components/rating-select';
import { Student as TStudent } from '@/types';
import { faker } from '@faker-js/faker';
import { startCase } from 'lodash';

export type StudentsTableProps = {
    students: TStudent[];
};

/**
 * @param {StudentsTableProps} props
 * @returns {JSX.Element}
 */
const StudentsTable: React.FC<StudentsTableProps> = ({
    students
}: StudentsTableProps): JSX.Element => {
    const CNT = 5;

    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell width={50} />
                    <TableCell align="left" width={350}>
                        Name
                    </TableCell>
                    {Array(CNT)
                        .fill('')
                        .map((_, idx) => (
                            <TableCell key={idx} align="center">
                                {startCase(faker.word.adjective())}
                            </TableCell>
                        ))}
                    <TableCell width={100} />
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map(({ avatar, id, firstName, lastName }, rowIdx) => {
                    return (
                        <TableRow key={id}>
                            <TableCell align="center">
                                {rowIdx === 2 && (
                                    <Tooltip title="Messages">
                                        <Avatar
                                            color="primary"
                                            sx={{
                                                bgcolor: 'error.main',
                                                width: 24,
                                                height: 24
                                            }}
                                        >
                                            <Typography>2</Typography>
                                        </Avatar>
                                    </Tooltip>
                                )}
                            </TableCell>
                            <TableCell align="left">
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <Avatar
                                        sx={{ width: 32, height: 32 }}
                                        src={avatar}
                                    />
                                    <Link href={`/student/${id}`}>
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {firstName} {lastName}
                                        </Typography>
                                    </Link>
                                </Stack>
                            </TableCell>
                            {Array(CNT)
                                .fill('')
                                .map((_, colIdx) => (
                                    <TableCell key={colIdx} align="center">
                                        <RatingSelect
                                            defaultValue="M"
                                            warning={
                                                rowIdx === 2 && colIdx === 0
                                            }
                                            error={
                                                rowIdx === 2 &&
                                                [1, 2].includes(colIdx)
                                            }
                                        />
                                    </TableCell>
                                ))}
                            <TableCell align="right">
                                <Tooltip title="More">
                                    <IconButton size="small">
                                        <MoreHorizIcon />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
};

export default StudentsTable;
