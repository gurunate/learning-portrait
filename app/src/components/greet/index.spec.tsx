import * as fixtures from '@/lib/fixtures';

import Greet from '.';
import { render } from '@testing-library/react';

describe('Greet', () => {
    describe('component', () => {
        it('should render', () => {
            const student = fixtures.student();

            render(<Greet name={student.firstName} />);
        });
    });
});
