'use client';

import {
    Box,
    Dialog,
    DialogContent,
    DialogProps,
    Divider,
    Grid,
    IconButton,
    Tooltip
} from '@mui/material';
import {
    FieldValues,
    FormProvider,
    useController,
    useForm
} from 'react-hook-form';
import {
    Course as TCourse,
    Message as TMessage,
    Student as TStudent
} from '@/types';

import CloseIcon from '@mui/icons-material/Close';
import ConversationHeader from './header';
import ConversationMessages from './messages';
import ConversationTextField from './text-field';
import { DevTool } from '@hookform/devtools';
import React from 'react';
import SideNav from './side-nav';
import { conversationSchema } from './schema';
import { formatFullName } from '@/lib/utils';
import { isEmpty } from 'lodash';
import { yupResolver } from '@hookform/resolvers/yup';

export { conversationSchema } from './schema';
export type { ConversationFormValues } from './schema';

export type ConversationsDialogProps = DialogProps & {
    course: TCourse;
    courses: TCourse[];
    devtool?: boolean;
    messages: TMessage[];
    onSend: (data: FieldValues) => void;
    student: TStudent;
    uploadedOn?: string;
};

/**
 *
 * @param {ConversationsDialogProps} props
 * @returns {JSX.Element}
 */
const ConversationsDialog: React.FC<ConversationsDialogProps> = ({
    course,
    courses,
    devtool = false,
    messages,
    onClose,
    onSend,
    open,
    student
}: ConversationsDialogProps): JSX.Element => {
    const bottomRef = React.useRef();

    const methods = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onChange',
        resolver: yupResolver(conversationSchema),
        defaultValues: {
            course: course?.id,
            message: ''
        }
    });

    const { control, handleSubmit, reset, setFocus } = methods;

    const { field: messageField } = useController({
        control,
        name: 'message'
    });

    const handleClose = () => {
        reset();

        // @ts-ignore
        onClose();
    };

    const scrollToBottom = () => {
        const bottomEl = bottomRef.current as unknown as HTMLInputElement;
        bottomEl?.scrollIntoView();
    };

    React.useEffect(() => {
        !isEmpty(messages) && scrollToBottom();
    }, [messages]);

    const onSubmit = ({ message }: FieldValues) => {
        onSend(message);
        reset();

        scrollToBottom();

        setFocus(messageField.name);
    };

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
            <FormProvider {...methods}>
                {devtool && <DevTool control={control} placement="top-right" />}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogContent>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-start"
                            spacing={4}
                        >
                            <Grid item sm={3}>
                                <SideNav />
                            </Grid>
                            <Grid
                                item
                                sm={9}
                                container
                                direction="column"
                                justifyContent="space-between"
                                alignItems="stretch"
                                spacing="4"
                            >
                                <Grid
                                    item
                                    container
                                    direction="row"
                                    spacing={2}
                                >
                                    <Grid item sm={11}>
                                        <ConversationHeader
                                            name={
                                                formatFullName(
                                                    student
                                                ) as string
                                            }
                                            courses={courses}
                                        />
                                    </Grid>
                                    <Grid item sm={1} textAlign="right">
                                        <Tooltip title="Close">
                                            <IconButton
                                                aria-label="close"
                                                onClick={handleClose}
                                            >
                                                <CloseIcon
                                                    sx={{
                                                        width: 30,
                                                        height: 30
                                                    }}
                                                />
                                            </IconButton>
                                        </Tooltip>
                                    </Grid>
                                    <Grid item sm={12}>
                                        <Divider />
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    minHeight={200}
                                    maxHeight={500}
                                    sx={{ overflow: 'auto' }}
                                >
                                    <Box py={2}>
                                        <ConversationMessages
                                            messages={messages}
                                            student={student}
                                        />
                                    </Box>
                                    <Box ref={bottomRef} />
                                </Grid>
                                <Grid item>
                                    <ConversationTextField />
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </form>
            </FormProvider>
        </Dialog>
    );
};

export default ConversationsDialog;
