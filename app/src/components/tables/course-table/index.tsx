import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import { Course as TCourse, Objective as TObjective, Student as TStudent } from '@/types';

import GradeSelect from '@/components/grade-select';
import Rating from '@/components/rating';
import { formatFullName } from '@/lib/utils';

export interface Column {
    id: string;
    label: string;
    minWidth?: number;
}

export type CourseTableProps = {
    course: TCourse;
    students: TStudent[];
    objectives?: TObjective[];
};

/**
 * @param {CourseTableProps} props
 * @returns {JSX.Element}
 */
const CourseTable: React.FC<CourseTableProps> = ({
    course,
    students,
    objectives
}: CourseTableProps): JSX.Element => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {objectives ?
                <Table aria-label='course table' stickyHeader sx={{ tableLayout: 'fixed'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell 
                                key={'name'} 
                                align='left' 
                                sx={{ 
                                    width: 236, 
                                    position: 'sticky', 
                                    left: 0, 
                                    backgroundColor: 'white', 
                                    boxShadow: '5px 10px 36px 0px #E7EAEC', 
                                    borderRight: '2px solid #E7EAEC', 
                                    zIndex: '50' 
                                }}
                            >
                                <Typography variant='subtitle2'>Student Name</Typography>
                            </TableCell>
                            {objectives.map((column) => (
                                column.name === 'overall' ? (
                                    <TableCell 
                                        key={'name'} 
                                        align='left' 
                                        sx={{ 
                                            width: 172, 
                                            position: 'sticky', 
                                            left: 236, 
                                            backgroundColor: 'white', 
                                            boxShadow: '5px 10px 36px 0px #E7EAEC', 
                                            borderRight: '2px solid #E7EAEC', 
                                            zIndex: '50' 
                                        }}
                                    >
                                        <Typography variant='subtitle2'>Overall</Typography>
                                    </TableCell>) : (
                                    <TableCell 
                                        key={column.id} 
                                        align='left' 
                                        sx={{ width: 172, background: 'white',  }} 
                                    >
                                        <Typography variant='subtitle2'>{column.name}</Typography>
                                    </TableCell>   
                                )                           
                                )
                            )}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((student, idx) => {
                            const fullName = formatFullName(student) as string;
                            return (
                                <TableRow hover tabIndex={-1} key={idx}>
                                    <TableCell 
                                        key={1} 
                                        align='left'
                                        sx={{
                                            position: 'sticky',
                                            left: 0,
                                            backgroundColor: 'white',
                                            boxShadow: '5px 10px 36px 0px #E7EAEC',
                                            borderRight: '2px solid #E7EAEC',
                                            zIndex: '50'
                                        }}
                                    >
                                        <Typography variant='body1'>{fullName}</Typography>
                                    </TableCell>
                                    {objectives.map((column) => {
                                        const value = '';
                                        console.log(column)
                                        console.log(student)
                                        if (column.name === 'overall') {
                                            return (
                                                <TableCell key={column.id} align='left' sx={{
                                                    position: 'sticky',
                                                    left: 236,
                                                    backgroundColor: 'white',
                                                    boxShadow: '5px 10px 36px 0px #E7EAEC',
                                                    borderRight: '2px solid #E7EAEC',
                                                    zIndex: '50'
                                                }}>
                                                    <GradeSelect value={value} onChange={(e) => e.target.value}/>
                                                </TableCell>
                                            )
                                        } else {
                                            return (
                                                <TableCell key={column.id} align='left' sx={{ backgroundColor: 'white' }}>
                                                    <Rating label='Mastery' color="success" />
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
                : <Typography variant='body1'>No Course Data</Typography>
            }       
            </Grid>
        </Grid>
    );
};

export default CourseTable;
