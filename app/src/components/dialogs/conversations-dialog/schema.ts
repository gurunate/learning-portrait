import * as yup from 'yup';

import { REQUIRED_FIELD_MESSAGE } from '@/lib/constants';

/**
 * Yup Conversation schema
 */
export const conversationSchema = yup.object().shape({
    message: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE),
    course: yup.string().nullable().required(REQUIRED_FIELD_MESSAGE)
});

export type ConversationFormValues = yup.InferType<typeof conversationSchema>;
