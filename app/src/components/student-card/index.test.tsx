import * as fixtures from '@/lib/fixtures';

import EvidenceTable from '.';
import { render } from '@testing-library/react';

describe('EvidenceTable', () => {
    describe('component', () => {
        it('should render', () => {
            const student = fixtures.student();

            render(<EvidenceTable student={student} />);
        });
    });
});
