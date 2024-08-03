import * as yup from 'yup';

/**
 * Yup Note schema
 */
export const noteSchema = yup.object().shape({
    note: yup.string()
});

export type NoteFormValues = yup.InferType<typeof noteSchema>;
