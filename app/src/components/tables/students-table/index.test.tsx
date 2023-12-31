import * as fixtures from '@/lib/fixtures';

import StudentsTable from '.';
import { render } from '@testing-library/react';

describe('StudentsTable ', () => {
    describe('component', () => {
        it('should render', () => {
            const students = fixtures.students(1);
            const objectives = fixtures.objectives(1);
            render(
                <StudentsTable students={students} objectives={objectives} />
            );
        });
    });
});
