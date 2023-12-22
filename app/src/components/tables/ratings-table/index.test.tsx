import RatingsTable from '.';
import { render } from '@testing-library/react';

describe('RatingsTable', () => {
    describe('component', () => {
        it('should render', () => {
            render(<RatingsTable />);
        });
    });
});
