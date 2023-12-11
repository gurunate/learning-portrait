import {
    Button,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip
} from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export type RatingsTableProps = unknown;

/**
 * @param {RatingsTableProps} props
 * @returns {JSX.Element}
 */
const RatingsTable: React.FC<RatingsTableProps> = (
    props: RatingsTableProps
): JSX.Element => {
    const rows = [
        {
            value: 1,
            key: 'H',
            name: 'Helppppppp',
            description: 'Student is unable to start problems independently'
        },
        {
            value: 2,
            key: 'T',
            name: 'NoT YeT',
            description: 'Student has shown some foundational beginnings of'
        },
        {
            value: 3,
            key: 'A',
            name: 'Approaching',
            description: 'Student has made significant progress'
        },
        {
            value: 4,
            key: 'M',
            name: 'Mastery',
            description: 'Student can independently demonstrate'
        }
    ];

    const COLOR_MAP = ['success', 'warning', 'info', 'error'];

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" width={250}>
                                Name
                            </TableCell>
                            <TableCell align="left">Description</TableCell>
                            <TableCell width={100} />
                            <TableCell width={100} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(({ value, key, name, description }, idx) => (
                            <TableRow key={value}>
                                <TableCell variant="head" align="left">
                                    {name}
                                </TableCell>
                                <TableCell align="left">
                                    {description}
                                </TableCell>
                                <TableCell align="center">
                                    <Button
                                        variant="contained"
                                        // @ts-ignore
                                        color={COLOR_MAP[idx]}
                                        endIcon={<ArrowDropDownIcon />}
                                    >
                                        {key}
                                    </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Tooltip title="More">
                                        <IconButton size="small">
                                            <MoreHorizIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Grid>
            <Grid item xs={12} textAlign="right">
                <Button variant="contained">Add</Button>
            </Grid>
        </Grid>
    );
};

export default RatingsTable;
