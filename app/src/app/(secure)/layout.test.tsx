import '@testing-library/jest-dom';

import Layout from './layout';
import { render } from '@testing-library/react';

jest.mock('next/navigation', () => ({
    useSelectedLayoutSegment: jest.fn()
}));

describe.skip('Secure Layout ', () => {
    describe('component', () => {
        it('should render', () => {
            render(<Layout>foo</Layout>);
        });
    });
});
