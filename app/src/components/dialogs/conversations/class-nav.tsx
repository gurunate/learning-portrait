import { Avatar, AvatarGroup, Typography } from '@mui/material';
import { Course as TCourse, Student as TStudent } from '@/types';

import { Stack } from '@mui/system';
import { formatFullName } from '@/lib/utils';

export type ClassNavProps = {
    max?: number;
    students: TStudent[];
};

/**
 *
 * @param {ClassNavProps} props
 * @returns {JSX.Element}
 */
const ClassNav: React.FC<ClassNavProps> = ({
    max = 3,
    students
}: ClassNavProps): JSX.Element => (
    <Stack direction="row" alignItems="center" spacing={1}>
        <AvatarGroup>
            {students.slice(0, max).map(student => (
                <Avatar
                    sx={{ width: 24, height: 24 }}
                    key={student.id}
                    alt={formatFullName(student) as string}
                    src={student.avatar}
                />
            ))}
        </AvatarGroup>
        {students.length > max && (
            <Typography variant="body2" color="textSecondary">
                +{students.length - max} students in this group
            </Typography>
        )}
    </Stack>
);

export default ClassNav;
