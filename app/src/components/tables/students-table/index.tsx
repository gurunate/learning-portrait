import {
    Avatar,
    Badge,
    Button,
    Grid,
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

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { faker } from '@faker-js/faker';
import { startCase } from 'lodash';

export type StudentsTableProps = unknown;

/**
 * @param {StudentsTableProps} props
 * @returns {JSX.Element}
 */
const StudentsTable: React.FC<StudentsTableProps> = (
    props: StudentsTableProps
): JSX.Element => {
    const generateStudent = () => ({
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        messages: faker.number.int({ min: 0, max: 3 })
    });

    const COLOR_MAP = ['success', 'warning', 'info', 'error'];
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
                {Array(33)
                    .fill(0)
                    .map((_, idx) => {
                        const { id, name, messages } = generateStudent();
                        return (
                            <TableRow key={id}>
                                <TableCell align="center">
                                    {!!messages && (
                                        <Avatar
                                            color="primary"
                                            sx={{
                                                bgcolor: 'error.main',
                                                width: 24,
                                                height: 24
                                            }}
                                        >
                                            <Typography>{messages}</Typography>
                                        </Avatar>
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
                                            src={
                                                idx === 3
                                                    ? '/avatars/2185184f-ffa9-48f2-8611-9893de06e4f6.svg'
                                                    : ''
                                            }
                                        />
                                        <Typography sx={{ fontWeight: 700 }}>
                                            {name}
                                        </Typography>
                                    </Stack>
                                </TableCell>
                                {Array(CNT)
                                    .fill('')
                                    .map((_, idx) => (
                                        <TableCell key={idx} align="center">
                                            <Badge
                                                color="warning"
                                                badgeContent="!"
                                                anchorOrigin={{
                                                    vertical: 'top',
                                                    horizontal: 'left'
                                                }}
                                                invisible
                                            >
                                                <Badge
                                                    color="error"
                                                    variant="dot"
                                                    invisible={idx > messages}
                                                >
                                                    <Button
                                                        variant="outlined"
                                                        // @ts-ignore
                                                        color={
                                                            COLOR_MAP[idx] ||
                                                            'inherit'
                                                        }
                                                        endIcon={
                                                            <ArrowDropDownIcon />
                                                        }
                                                    >
                                                        X
                                                    </Button>
                                                </Badge>
                                            </Badge>
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
