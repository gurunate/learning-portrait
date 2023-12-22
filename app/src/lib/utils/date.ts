import { format as dateFnsFormat } from 'date-fns';

export const DATE_FORMAT_PATTERN = 'MMM d, yyyy';

/**
 * @param {string | Date | number} value
 * @param {string} pattern
 * @returns {string }
 */
export const formatDate = (
    value?: string | Date | number,
    pattern?: string
): string => {
    if (!value || isNaN(Date.parse(value as string))) {
        return value as string;
    }

    if (typeof value === 'string') {
        return dateFnsFormat(new Date(value), pattern || DATE_FORMAT_PATTERN);
    }

    return dateFnsFormat(value, pattern || DATE_FORMAT_PATTERN);
};
