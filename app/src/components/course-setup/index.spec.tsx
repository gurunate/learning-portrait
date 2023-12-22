import * as fixtures from '@/lib/fixtures';

import CourseSetup from '.';
import { render } from '@testing-library/react';

describe('CourseSetup', () => {
    describe('component', () => {
        it('should render', () => {
            const courses = fixtures.courses(1);
            const objectives = fixtures.objectives(1);

            render(<CourseSetup courses={courses} objectives={objectives} />);
        });
    });
});
