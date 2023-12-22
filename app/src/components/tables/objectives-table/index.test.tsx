import * as fixtures from '@/lib/fixtures';

import ObjectivesTable from '.';
import { render } from '@testing-library/react';

describe('ObjectivesTable', () => {
    describe('component', () => {
        it('should render', () => {
            const objectives = fixtures.objectives(1);

            render(<ObjectivesTable objectives={objectives} />);
        });
    });
});
