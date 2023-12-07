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
            description: 'Evidence is not complete'
        },
        {
            value: 2,
            key: 'C',
            name: 'Complete',
            description: 'Evidence is submitted'
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
                <Button variant="contained">Add New</Button>
            </Grid>
        </Grid>
    );
};

export default EvidenceTable;
