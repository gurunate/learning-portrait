import { Avatar, Tooltip, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { formatDateRelative, formatFullName } from '@/lib/utils';

import { BORDER_RADIUS } from '@/components/theme-registry/theme';
import { Message as TMessage } from '@/types';

export type SentMessageProps = TMessage & unknown;

/**
 *
 * @param {SentMessageProps} props
 * @returns {JSX.Element}
 */
const SentMessage: React.FC<SentMessageProps> = ({
    sender,
    comment,
    created
}: SentMessageProps): JSX.Element => (
    <Stack direction="row-reverse" spacing={2} alignItems="center">
        <Tooltip title={formatFullName(sender) as string}>
            <Avatar sx={{ width: 40, height: 40 }} src={sender?.avatar} />
        </Tooltip>
        <Stack direction="column">
            <Box
                p={2}
                ml={10}
                sx={{
                    backgroundColor: 'primary.main',
                    color: 'primary.contrastText',
                    borderTopLeftRadius: BORDER_RADIUS,
                    borderTopRightRadius: BORDER_RADIUS,
                    borderBottomLeftRadius: BORDER_RADIUS
                }}
            >
                <Typography variant="body1">{comment}</Typography>
            </Box>
            <Typography
                variant="caption"
                sx={{ color: 'edge.dark' }}
                textAlign="right"
            >
                {formatDateRelative(created) as string}
            </Typography>
        </Stack>
    </Stack>
);

export default SentMessage;
