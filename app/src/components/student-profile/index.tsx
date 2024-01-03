'use client';

import * as fixtures from '@/lib/fixtures';

import { Button, Grid } from '@mui/material';
import {
    Course as TCourse,
    Objective as TObjective,
    Student as TStudent
} from '@/types';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ConversationsDialog from '../dialogs/conversations';
import Link from 'next/link';
import React from 'react';
import StudentCard from '@/components/student-card';
import StudentEvidence from './evidence';
import StudentObjective from './objective';

export type StudentProfileProps = {
    courses: TCourse[];
    objectives: TObjective[];
    student: TStudent;
};

/**
 * @param {StudentProfileProps} props
 * @returns {JSX.Element}
 */
const StudentProfile: React.FC<StudentProfileProps> = ({
    courses,
    objectives,
    student
}): JSX.Element => {
    const [open, setOpen] = React.useState(false);

    const evidence = fixtures.evidenceList(3);
    const messages = fixtures.messages(7, {
        recipient: student,
        sender: {
            id: '123',
            firstName: 'Jeff',
            lastName: 'Harding',
            email: 'jeff.harding@email.com',
            avatar: '/avatars/jeff.png'
        }
    });

    const handleMessageStudent = () => {
        setOpen(true);
    };

    const handleSend = () => {};

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Grid container spacing={4}>
            <Grid item md={12}>
                <Button
                    startIcon={<ArrowBackIosIcon />}
                    href="/dashboard"
                    LinkComponent={Link}
                >
                    Back to Dashboard
                </Button>
            </Grid>
            <Grid item md={3}>
                <StudentCard
                    student={student}
                    onMessageStudent={handleMessageStudent}
                />
            </Grid>
            <Grid item md={9} container spacing={4} mt={1}>
                <Grid item md={12}>
                    <StudentObjective objectives={objectives} />
                </Grid>
                <Grid item md={12}>
                    <StudentEvidence evidence={evidence} />
                </Grid>
            </Grid>
            <ConversationsDialog
                open={open}
                course={courses[0]}
                courses={courses}
                student={student}
                messages={messages}
                onSend={handleSend}
                onClose={handleClose}
            />
        </Grid>
    );
};

export default React.memo(StudentProfile);
