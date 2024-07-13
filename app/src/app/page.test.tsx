import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Page from './page';

describe('Home page', () => {
    it('should render', () => {
        render(<Page />);

        expect(screen.getByRole('heading')).toHaveTextContent(
            'A gradebook that thinks like you do.'
        );
    });
});
