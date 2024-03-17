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
import { Objective as TObjective, Student as TStudent } from '@/types';

import Link from '@/components/link';
import MessageCountAvatar from '@/components/avatars/message-count';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RatingSelect from '@/components/rating-select';
import { formatFullName } from '@/lib/utils';

export type StudentsTableProps = {
    objectives?: TObjective[];
    students: TStudent[];
};

/**
 * @param {StudentsTableProps} props
 * @returns {JSX.Element}
 */
const StudentsTable: React.FC<StudentsTableProps> = ({
    objectives,
    students
}: StudentsTableProps): JSX.Element => {
    return (
        <Table
            sx={{ minWidth: 650 }}
            aria-label="student ratings table"
            stickyHeader
        >
            <TableHead>
                <TableRow>
                    <TableCell
                        align="left"
                        width={350}
                        colSpan={2}
                        sx={{ paddingLeft: 10 }}
                    >
                        Student
                    </TableCell>
                    {objectives?.map(({ id, name }) => (
                        <TableCell key={id} align="center">
                            {name}
                        </TableCell>
                    ))}
                    <TableCell width={100} />
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((student, rowIdx) => {
                    const fullName = formatFullName(student) as string;
                    return (
                        <TableRow key={student.id}>
                            <TableCell align="center" width={50}>
                                {rowIdx === 2 && (
                                    <MessageCountAvatar total={2} />
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
                                        src={student.avatar}
                                        imgProps={{
                                            alt: `${fullName} avatar`
                                        }}
                                    />
                                    <Link href={`/student/${student.id}`}>
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {fullName}
                                        </Typography>
                                    </Link>
                                </Stack>
                            </TableCell>
                            {objectives?.map((objective, colIdx) => (
                                <TableCell
                                    key={objective.id}
                                    align="center"
                                    // aria-label={`${fullName} ${objective.name} objective`}
                                >
                                    <RatingSelect
                                        inputProps={{
                                            'aria-label': `${fullName} ${objective.name} select`
                                        }}
                                        defaultValue="M"
                                        warning={rowIdx === 2 && colIdx === 0}
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
