import { formatDate, formatDateRelative } from './date';

describe('utils', () => {
    describe('formatDate', () => {
        it('should format date', () => {
            expect(formatDate('2022-02-12T15:30:32.723Z')).toBe('Feb 12, 2022');
            expect(formatDate('12/25/1999')).toBe('Dec 25, 1999');
            expect(formatDate('02-02-2022')).toBe('Feb 2, 2022');
        });

        it('should support a pattern override', () => {
            const testDate = '2013-03-09T15:30:32.723Z';
            expect(formatDate(testDate, 'MM/dd/yyyy')).toBe('03/09/2013');
            expect(formatDate(testDate, 'EEEE, MMMM do')).toBe(
                'Saturday, March 9th'
            );
        });

        it('should not fail with an empty value', () => {
            expect(formatDate('')).toBe('');
            expect(formatDate(null)).toBe(null);
            expect(formatDate(undefined)).toBe(undefined);
        });
    });

    describe('formatDateRelative', () => {
        it('should display relative time today', () => {
            expect(formatDateRelative(new Date())).toContain('today');
        });

        it('should display time when past 7 days', () => {
            expect(
                formatDateRelative(
                    '2022-02-12T15:30:32.723Z',
                    new Date('12/30/2023')
                )
            ).toBe('9:30 AM');
        });

        it('should not fail with an empty value', () => {
            expect(formatDateRelative('')).toBe('');
            expect(formatDateRelative(null)).toBe('');
            expect(formatDateRelative(undefined)).toBe('');
        });
    });
});
