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
import { has } from 'lodash';

export interface Column {
    id: string;
    label: string;
    minWidth?: number;
}

export type CourseTableProps = {
    course: TCourse;
    students: TStudent[];
    objectives?: TObjective[];
    hasSubObjectives?: boolean;
};

/**
 * @param {CourseTableProps} props
 * @returns {JSX.Element}
 */
const CourseTable: React.FC<CourseTableProps> = ({
    course,
    students,
    objectives,
    hasSubObjectives = false
}: CourseTableProps): JSX.Element => {

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {objectives ?
                <Table aria-label='course table' stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell 
                                key={'name'} 
                                align='left' 
                                sx={{ 
                                    minWidth: 236, 
                                    position: 'sticky', 
                                    left: 0,  
                                    borderTop: '1px solid #E7EAEC', 
                                    borderBottom: '1px solid #E7EAEC',
                                    borderRight: '1px solid #E7EAEC', 
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
                                            minWidth: 172, 
                                            position: 'sticky', 
                                            left: 236, 
                                            backgroundColor: 'white', 
                                            boxShadow: '5px 10px 36px 0px #E7EAEC', 
                                            borderTop: '1px solid #E7EAEC', 
                                            borderRight: '1px solid #E7EAEC',
                                            zIndex: '50' 
                                        }}
                                    >
                                        <Typography variant='subtitle2'>Overall</Typography>
                                    </TableCell>) : (
                                    <TableCell 
                                        key={column.id} 
                                        align='left' 
                                        colSpan={hasSubObjectives ? (column.subObjectives ?? []).length : 1}
                                        sx={{ minWidth: 172, background: 'white', borderTop: '1px solid #E7EAEC', borderLRight: '1px solid #E7EAEC'}} 
                                    >
                                        <Typography variant='subtitle2'>{column.name}</Typography>
                                    </TableCell>    
                                )                           
                                )
                            )}
                        </TableRow>
                        {hasSubObjectives && (
                            <TableRow>
                                <TableCell key='sub-objective' align='left' sx={{ 
                                    minWidth: 236, 
                                    position: 'sticky', 
                                    left: 0,  
                                    top: 48, 
                                    borderRadius: 0,
                                    borderBottom: '1px solid #E7EAEC',
                                    zIndex: '9999' 
                                }} />
                                {objectives.map((column) => (
                                (column.subObjectives ?? []).map((subObjective) => (
                                    <TableCell 
                                        key={subObjective.id} 
                                        align='left' 
                                        sx={{ minWidth: 172, position: 'sticky', top: 48, backgroundColor: 'white',borderTop: '1px solid #E7EAEC', borderRight: '1px solid #E7EAEC'}} 
                                    >
                                        <Typography variant='subtitle2'>{subObjective.name}</Typography>
                                    </TableCell>
                                ))
                                ))}
                            </TableRow>
                        )}
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
                                            borderBottom: '1px solid #E7EAEC', 
                                            borderRight: '1px solid #E7EAEC',
                                            boxShadow: '5px 10px 36px 0px #E7EAEC',
                                            zIndex: '50'
                                        }}
                                    >
                                        <Typography variant='body1'>{fullName}</Typography>
                                    </TableCell>
                                    {objectives.map((column) => {
                                        const value = '';
                                        if (column.name === 'overall') {
                                            return (
                                                <TableCell key={column.id} align='left' sx={{
                                                    position: 'sticky',
                                                    left: 236,
                                                    backgroundColor: 'white',
                                                    borderBottom: '1px solid #E7EAEC',
                                                    borderRight: '2px solid #E7EAEC',
                                                    zIndex: '50'
                                                }}>
                                                    <GradeSelect value={column.key as ''} onChange={(e) => e.target.value}/>
                                                </TableCell>
                                            )
                                        } else {
                                            return (
                                                hasSubObjectives ? (
                                                    (column.subObjectives ?? []).map((subObjective) => (
                                                        <TableCell key={subObjective.id} align='left' sx={{ backgroundColor: '#FFF', borderBottom: '1px solid #E7EAEC' }}>
                                                            <Rating label='Mastery' color='success' variant={column.name === 'overall' ? 'filled': 'outlined'} />
                                                        </TableCell>
                                                    ))
                                                ) : (
                                                <TableCell key={column.id} align='left' sx={{ backgroundColor: '#FFF', borderBottom: '1px solid #E7EAEC' }}>
                                                    <Rating label='Mastery' color='success' />
                                                </TableCell>
                                                )
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
