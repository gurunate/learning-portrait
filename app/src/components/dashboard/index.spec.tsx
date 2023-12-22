import * as fixtures from '@/lib/fixtures';

import Dashboard from '.';
import { render } from '@testing-library/react';

describe('Dashboard', () => {
    describe('component', () => {
        it('should render', () => {
            const courses = fixtures.courses(1);
            const objectives = fixtures.objectives(1);
            const students = fixtures.students(1);

            render(
                <Dashboard
                    courses={courses}
                    objectives={objectives}
                    students={students}
                />
            );
        });
    });
});
