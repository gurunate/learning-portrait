import { Divider, Grid, Stack, Typography } from '@mui/material';
import { Message as TMessage, Student as TStudent } from '@/types';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react';
import ReceivedMessage from './received';
import SentMessage from './sent';
import { formatDate } from '@/lib/utils';

export type ConversationMessagesProps = {
    messages?: TMessage[];
    student: TStudent;
};

/**
 *
 * @param {ConversationMessagesProps} props
 * @returns {JSX.Element}
 */
const ConversationMessages: React.FC<ConversationMessagesProps> = ({
    messages = [],
    student
}: ConversationMessagesProps): JSX.Element => {
    let prev = formatDate(new Date());

    return (
        <Grid
            container
            direction="column"
            justifyContent="flex-end"
            alignItems="stretch"
            spacing={2}
            pr={2}
        >
            {messages.map(message => {
                const formattedCreated = formatDate(message.created);
                const diffDate = prev !== formattedCreated;
                prev = formattedCreated;

                return (
                    <React.Fragment key={message.id}>
                        {diffDate && (
                            <Grid item>
                                <Divider sx={{ color: 'red' }}>
                                    <Stack direction="row" spacing={1}>
                                        <Typography sx={{ color: 'edge.dark' }}>
                                            {formattedCreated}
                                        </Typography>
                                        <KeyboardArrowDownIcon
                                            fontSize="small"
                                            sx={{ color: 'edge.dark' }}
                                        />
                                    </Stack>
                                </Divider>
                            </Grid>
                        )}
                        <Grid item>
                            {student.id === message.sender.id && (
                                <ReceivedMessage {...message} />
                            )}
                            {student.id !== message.sender.id && (
                                <SentMessage {...message} />
                            )}
                        </Grid>
                    </React.Fragment>
                );
            })}
        </Grid>
    );
};

export default ConversationMessages;
