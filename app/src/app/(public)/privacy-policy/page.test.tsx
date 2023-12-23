import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Page from './page';

describe('Privacy Policy page', () => {
    it('should render', () => {
        render(<Page />);

        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });
});
