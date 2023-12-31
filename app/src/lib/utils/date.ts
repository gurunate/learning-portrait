import { format, formatRelative, intervalToDuration } from 'date-fns';

import { DATE_FORMAT_PATTERN } from '@/lib/constants';

/**
 * @param {string | Date | number | null} value
 * @param {string} pattern
 * @returns {string }
 */
export const formatDate = (
    value?: string | Date | number | null,
    pattern?: string
): string => {
    if (!value || isNaN(Date.parse(value as string))) {
        return value as string;
    }

    let target = value;

    if (['string', 'number'].includes(typeof value)) {
        target = new Date(value);
    }

    return format(target as Date, pattern || DATE_FORMAT_PATTERN);
};

/**
 * @param {string | Date | number | null} value
 * @param { Date } base
 * @returns {string}
 */
export const formatDateRelative = (
    value?: string | Date | number | null,
    base: Date = new Date()
): string => {
    if (value === '' || value === null || value === undefined) {
        return '';
    }

    let target = value;

    if (['string', 'number'].includes(typeof value)) {
        target = new Date(value);
    }

    const { days = 0 } = intervalToDuration({
        start: target as Date,
        end: base
    });

    if (days >= 7) {
        return format(target as Date, 'p');
    }

    return formatRelative(target as Date, base as Date);
};
