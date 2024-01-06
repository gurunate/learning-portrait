import { Avatar, Tooltip, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { formatDateRelative, formatFullName } from '@/lib/utils';

import { BORDER_RADIUS } from '@/components/theme-registry/theme';
import { Message as TMessage } from '@/types';

export type ReceivedMessageProps = TMessage & unknown;

/**
 * @param {ReceivedMessageProps} props
 * @returns {JSX.Element}
 */
const ReceivedMessage: React.FC<ReceivedMessageProps> = ({
    sender,
    comment,
    created
}: ReceivedMessageProps): JSX.Element => (
    <Stack direction="row" spacing={2} alignItems="center">
        <Tooltip title={formatFullName(sender) as string}>
            <Avatar sx={{ width: 40, height: 40 }} src={sender?.avatar} />
        </Tooltip>
        <Stack direction="column">
            <Box
                p={2}
                mr={10}
                sx={{
                    backgroundColor: 'background.default',
                    borderColor: 'edge.main',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderTopLeftRadius: BORDER_RADIUS,
                    borderTopRightRadius: BORDER_RADIUS,
                    borderBottomRightRadius: BORDER_RADIUS
                }}
            >
                <Typography variant="body1">{comment}</Typography>
            </Box>
            <Typography variant="caption" sx={{ color: 'edge.dark' }}>
                {formatDateRelative(created) as string}
            </Typography>
        </Stack>
    </Stack>
);

export default ReceivedMessage;
