import { Avatar, Tooltip, Typography } from '@mui/material';

export type NotificationsAvatarProps = {
    size?: number;
    total: number;
};

/**
 * @param {NotificationsAvatarProps} props
 * @returns {JSX.Element}
 */
const NotificationsAvatar: React.FC<NotificationsAvatarProps> = ({
    size = 24,
    total
}: NotificationsAvatarProps): JSX.Element => (
    <Tooltip title="Messages">
        <Avatar
            color="primary"
            sx={{
                bgcolor: 'error.main',
                width: size,
                height: size
            }}
        >
            <Typography>{total}</Typography>
        </Avatar>
    </Tooltip>
);

export default NotificationsAvatar;
