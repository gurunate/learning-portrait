import * as fixtures from '@/lib/fixtures';

import StudentProfile from '.';
import { render } from '@testing-library/react';

describe('StudentProfile', () => {
    describe('component', () => {
        it('should render', () => {
            const courses = fixtures.courses(1);
            const student = fixtures.student();

            render(<StudentProfile courses={courses} student={student} />);
        });
    });
});
