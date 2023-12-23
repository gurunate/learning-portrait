import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Page from './page';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        push: jest.fn(),
        events: {
            on: jest.fn(),
            off: jest.fn(),
            emit: jest.fn()
        },
        isFallback: false
    })
}));

describe('Naming Conventions page', () => {
    it('should render', () => {
        render(<Page />);

        expect(screen.getByRole('heading')).toHaveTextContent(
            'Naming Conventions'
        );
    });
});
