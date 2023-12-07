import {
    Avatar,
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
        name: faker.person.fullName()
    });

    const COLOR_MAP = ['success', 'warning', 'info', 'error'];
    const CNT = 5;

    return (
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
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
                    .map(() => {
                        const { id, name } = generateStudent();
                        return (
                            <TableRow key={id}>
                                <TableCell variant="head" align="left">
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems="center"
                                    >
                                        <Avatar
                                            sx={{ width: 32, height: 32 }}
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
                                            <Button
                                                variant="outlined"
                                                // @ts-ignore
                                                color={COLOR_MAP[idx]}
                                                endIcon={<ArrowDropDownIcon />}
                                            >
                                                X
                                            </Button>
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
