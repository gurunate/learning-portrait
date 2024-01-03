import { Avatar, AvatarProps, Tooltip, Typography } from '@mui/material';

import React from 'react';
import { isNumber } from 'lodash';

export type MessageCountAvatarProps = AvatarProps & {
    total?: number | string;
};

const MAX = 24;

/**
 * @param {MessageCountAvatarProps} props
 * @returns {JSX.Element}
 */
const MessageCountAvatar: React.FC<MessageCountAvatarProps> = ({
    total = 0,
    ...props
}: MessageCountAvatarProps): JSX.Element =>
    isNumber(total) && total > 0 ? (
        <Tooltip title="Message Count" role="tooltip">
            <Avatar
                {...props}
                color="primary"
                sx={{
                    bgcolor: 'error.main',
                    width: MAX,
                    height: MAX
                }}
            >
                <Typography>{total}</Typography>
            </Avatar>
        </Tooltip>
    ) : (
        <></>
    );

export default MessageCountAvatar;
