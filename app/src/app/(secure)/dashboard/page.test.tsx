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

describe('Dashboard page', () => {
    it('should render', () => {
        //render(<Page />);

        //const course = screen.getByTestId('course-select');
        //expect(course).toBeInTheDocument();
    });
});
