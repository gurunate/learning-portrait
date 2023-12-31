import { formatFullName } from './string';

describe('utils', () => {
    describe('formatFullName', () => {
        it('should format full name', () => {
            expect(
                formatFullName({
                    id: '123',
                    firstName: 'Bob',
                    lastName: 'Jones',
                    email: 'test@email.com'
                })
            ).toBe('Bob Jones');
        });

        it('should not fail with an empty value', () => {
            // @ts-ignore
            expect(formatFullName('')).toBe('');
            // @ts-ignore
            expect(formatFullName(null)).toBe(null);
            // @ts-ignore
            expect(formatFullName(undefined)).toBe(undefined);
        });
    });
});
