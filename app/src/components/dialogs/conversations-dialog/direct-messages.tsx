import {
    Avatar,
    List,
    ListItemText,
    MenuItem,
    Stack,
    Typography
} from '@mui/material';

import NotificationsAvatar from '@/components/avatars/notifications';
import { Student as TStudent } from '@/types';
import { formatFullName } from '@/lib/utils';

export type DirectMessagesProps = {
    students: TStudent[];
    onClick: () => void;
};

/**
 *
 * @param {DirectMessagesProps} props
 * @returns {JSX.Element}
 */
const DirectMessages: React.FC<DirectMessagesProps> = ({
    onClick,
    students
}: DirectMessagesProps): JSX.Element => (
    <List component="nav" aria-label="Direct messages">
        {students.map((student, idx) => (
            <MenuItem key={student.id} selected={idx === 1} onClick={onClick}>
                <ListItemText
                    primary={
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={2}
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                            >
                                <Avatar
                                    sx={{ width: 32, height: 32 }}
                                    src={student.avatar}
                                />
                                <Typography>
                                    {formatFullName(student) as string}
                                </Typography>
                            </Stack>
                            {idx === 1 && <NotificationsAvatar total={2} />}
                        </Stack>
                    }
                />
            </MenuItem>
        ))}
    </List>
);

export default DirectMessages;
