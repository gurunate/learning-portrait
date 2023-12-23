import {
    Button,
    IconButton,
    Stack,
    TextField,
    TextFieldProps,
    Tooltip
} from '@mui/material';
import { useController, useFormContext } from 'react-hook-form';

import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { get } from 'lodash';

export type ConversationTextFieldProps = TextFieldProps & unknown;

/**
 * @param {ConversationTextFieldProps} props
 * @returns {JSX.Element}
 */
const ConversationTextField: React.FC<ConversationTextFieldProps> = (
    props: ConversationTextFieldProps
): JSX.Element => {
    const {
        formState: { errors }
    } = useFormContext();

    const { field: messageField } = useController({
        name: 'message'
    });

    return (
        <TextField
            {...props}
            {...messageField}
            error={Boolean(get(errors, messageField.name))}
            fullWidth
            autoFocus
            placeholder="Send your message…"
            InputProps={{
                startAdornment: (
                    <Tooltip arrow placement="top" title="Emoji">
                        <IconButton onClick={() => alert('coming soon...')}>
                            <EmojiEmotionsIcon />
                        </IconButton>
                    </Tooltip>
                ),
                endAdornment: (
                    <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Tooltip arrow placement="top" title="Attachments">
                            <IconButton onClick={() => alert('coming soon...')}>
                                <AddIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="top" title="Send now">
                            <span>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={!messageField.value}
                                    sx={{
                                        minWidth: 'auto'
                                    }}
                                >
                                    <SendIcon
                                        fontSize="small"
                                        sx={{
                                            color: 'primary.contrast'
                                        }}
                                    />
                                </Button>
                            </span>
                        </Tooltip>
                    </Stack>
                )
            }}
        />
    );
};

export default ConversationTextField;
