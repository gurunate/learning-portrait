import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';

export interface Column {
    id: string;
    label: string;
    minWidth?: number;
}

export type CourseTableProps = {
    columns: readonly Column[];
    rows: any[];
};

/**
 * @param {CourseTableProps} props
 * @returns {JSX.Element}
 */
const CourseTable: React.FC<CourseTableProps> = (
    props: CourseTableProps
): JSX.Element => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Table aria-label="course table" stickyHeader sx={{ tableLayout: 'fixed'}}>
                    <TableHead>
                        <TableRow>
                            {props.columns.map((column) => (
                                column.id === 'name' ? (
                                    <TableCell key={'name'} align="center" sx={{ width: 236, position: 'sticky', left: '0', background: 'white', boxShadow: '5px 10px 36px 0px #E7EAEC', borderRight: "2px solid #E7EAEC", zIndex: "9999" }}
                                    >
                                        Student Name
                                    </TableCell>
                                    ) : (
                                        <TableCell key={column.id} align="center" sx={{ width: column.minWidth }} >
                                        {column.label}
                                    </TableCell>
                                    )                                
                                )
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.rows.map((row) => {
                            return (
                                <TableRow hover tabIndex={-1} key={row.code}>
                                    {props.columns.map((column) => {
                                        const value = row[column.id];
                                        if (column.id === 'name' || column.id === 'overall') {
                                            return (
                                                <TableCell key={column.id} align={'left'} sx={{
                                                    position: "sticky",
                                                    left: 0,
                                                    background: "white",
                                                    boxShadow: '5px 10px 36px 0px #E7EAEC',
                                                    borderRight: "2px solid #E7EAEC",
                                                    zIndex: "9990"
                                                }}>
                                                    {value}
                                                </TableCell>
                                            )
                                        } else {
                                            return (
                                                <TableCell key={column.id} align={'center'}>
                                                    {value}
                                                </TableCell>
                                            )
                                        }
                                    }
                                )
                            }
                        </TableRow>
                    );
                    })}
                    </TableBody>
                </Table>
            </Grid>
        </Grid>
    );
};

export default CourseTable;
