import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Page from './page';

describe('Terms of Service page', () => {
    it('should render', () => {
        render(<Page />);

        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    });
});
