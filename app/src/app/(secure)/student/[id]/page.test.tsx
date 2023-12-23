import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Page from './page';
import { faker } from '@faker-js/faker';

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

describe('Student Profile page', () => {
    it('should render', () => {
        render(<Page params={{ id: faker.string.uuid() }} />);

        const headings = screen.getAllByRole('heading', { level: 3 });
        expect(headings[1]).toHaveTextContent('Objective');
    });
});
