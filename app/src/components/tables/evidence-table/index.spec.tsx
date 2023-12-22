import EvidenceTable from '.';
import { render } from '@testing-library/react';

describe('EvidenceTable', () => {
    describe('component', () => {
        it('should render', () => {
            render(<EvidenceTable />);
        });
    });
});
