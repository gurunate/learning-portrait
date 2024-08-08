import {
    Grid,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
    Typography,
} from '@mui/material';
import { Course as TCourse, Objective as TObjective, Student as TStudent } from '@/types';

import GradeSelect from '@/components/grade-select';
import Link from 'next/link';
import Rating from '@/components/rating';
import React from 'react';
import { filterSelectedObjectives } from '@/lib/utils/objective-mapping';
import { formatFullName } from '@/lib/utils';
import { orderBy } from 'lodash';

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
    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }
    type Order = 'asc' | 'desc';
    
    function getComparator<Key extends keyof any>(
        order: Order,
        orderBy: Key,
        ): (
        a: { [key in Key]: number | string },
        b: { [key in Key]: number | string },
        ) => number {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                {objectives ?
                <Table aria-label='course table' stickyHeader>
                    <TableHead>
                        <TableRow sx={{ position: 'sticky'}}>
                            <TableCell 
                                key={'name'} 
                                align='left' 
                                sx={{ 
                                    minWidth: 236, 
                                    position: 'sticky', 
                                    top: 0,
                                    left: 0,  
                                    borderTop: '1px solid #E7EAEC', 
                                    borderRight: '1px solid #E7EAEC', 
                                    //zIndex: '50' 
                                }}
                            >
                                {!hasSubObjectives ? <Typography variant='subtitle2'>Student Name</Typography> : null }
                            </TableCell>
                            {course.objectives && course.objectives.filter(obj => objectives.includes(obj)).find(column => column.name === 'Overall Grade') && (
                                <TableCell
                                    key='overall-grade'
                                    align='left'
                                    sx={{
                                        minWidth: 172,
                                        position: 'sticky',
                                        left: 236,
                                        borderTop: '1px solid #E7EAEC',
                                        borderRight: '1px solid #E7EAEC',
                                        borderBottom: '1px solid #E7EAEC',
                                        //zIndex: '50'
                                    }}
                                >
                                    <Typography variant='subtitle2'>Overall Grade</Typography>
                                </TableCell>
                            )}

                            {/* Render other objectives */}
                            {course.objectives && course.objectives.filter(obj => objectives.includes(obj)).map((column) => (
                                column.name !== 'Overall Grade' && (
                                    <TableCell
                                        key={column.id}
                                        align='left'
                                        colSpan={hasSubObjectives ? (column.children ?? []).filter(sub => objectives.includes(sub)).length : 1}
                                        sx={{ 
                                            minWidth: 172, 
                                            position: 'sticky',
                                            borderTop: '1px solid #E7EAEC', 
                                            borderRight: '1px solid #E7EAEC',
                                            //zIndex: '50'
                                        }}
                                    >
                                        <Typography variant='subtitle2'>{column.name}</Typography>
                                    </TableCell>
                                )
                            ))}
                        </TableRow>
                        {hasSubObjectives && (
                            <TableRow>
                                <TableCell key='sub-objective' align='left' sx={{ 
                                    minWidth: 236, 
                                    position: 'sticky', 
                                    left: 0,  
                                    top: 48, 
                                    borderRadius: 0,
                                    borderRight: '1px solid #E7EAEC',
                                    //zIndex: '50', 
                                    borderTop: 'none',
                                }}>
                                    <Typography variant='subtitle2'>Student Name</Typography>
                                </TableCell>
                                <TableCell sx={{ 
                                    minWidth: 100, 
                                    position: 'sticky', 
                                    left: 0,  
                                    top: 48, 
                                    borderRadius: 0,
                                    borderRight: '1px solid #E7EAEC',
                                    //zIndex: '50', 
                                    borderTop: 'none',
                                }} />
                                {course.objectives && course.objectives.filter(obj => objectives.includes(obj)).map((column) => (
                                (column.children ?? []).filter(sub => objectives.includes(sub)).map((subObjective) => (
                                    <TableCell  
                                        key={subObjective.id}
                                        align='left' 
                                        sx={{ 
                                            minWidth: 172, 
                                            position: 'sticky', 
                                            top: 48, 
                                            borderRight: '1px solid #E7EAEC',
                                            //zIndex: '50'
                                        }} 
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
                                            //zIndex: '50'
                                        }}
                                    >
                                        <Link href={`/course/${course.id}/student/${student.id}/objectives`} style={{ textDecoration: 'none', color: '#191C1E'}}>
                                            <Typography variant='body1'>{fullName}</Typography>
                                        </Link>
                                    </TableCell>
                                    {course.objectives && course.objectives.filter(obj => objectives.includes(obj)).find(column => column.name === 'Overall Grade') && (
                                        <TableCell 
                                            key={`overall-grade`} 
                                            align='left' 
                                            sx={{
                                                position: 'sticky',
                                                left: 236,
                                                backgroundColor: 'white',
                                                borderBottom: '1px solid #E7EAEC',
                                                borderRight: '2px solid #E7EAEC',
                                                //zIndex: '50'
                                            }}
                                        >
                                            <GradeSelect value='' onChange={(e) => e.target.value}/>
                                        </TableCell>
                                    )}
                                    {course.objectives && course.objectives.filter(obj => objectives.includes(obj)).map((column) => {
                                        const value = '';
                                            return (
                                                column.name !== 'Overall Grade' && (
                                                hasSubObjectives  && (column.children ?? []).filter(sub => objectives.includes(sub)).length > 0 ? (
                                                    (column.children ?? []).filter(sub => objectives.includes(sub)).map((subObjective) => (
                                                        <TableCell 
                                                            key={subObjective.id} 
                                                            align='left' 
                                                            sx={{ 
                                                                backgroundColor: '#FFF', 
                                                                borderBottom: '1px solid #E7EAEC', 
                                                            }
                                                        }>
                                                            <Link href={`/course/${course.id}/objectives/${subObjective.id}`}>
                                                                <Rating label='Mastery' color='success' variant={subObjective.name === 'Overall' ? 'filled': 'outlined'} />
                                                            </Link>
                                                        </TableCell>
                                                    )
                                                )
                                                ) : (
                                                <TableCell 
                                                    key={column.id} 
                                                    align='left' 
                                                    sx={{ 
                                                        backgroundColor: '#FFF', 
                                                        borderBottom: '1px solid #E7EAEC', 
                                                    }}
                                                >
                                                    <Link href={`/course/${course.id}/objectives`}>
                                                        <Rating label='Mastery' color='success' />
                                                    </Link>
                                                </TableCell>
                                                )
                                            ))
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
