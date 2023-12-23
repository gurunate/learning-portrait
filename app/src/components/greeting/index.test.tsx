import '@testing-library/jest-dom';

import * as fixtures from '@/lib/fixtures';

import { render, screen } from '@testing-library/react';

import Greeting from '.';

describe('Greeting', () => {
    describe('component', () => {
        const student = fixtures.student();
        const now = new Date();
        now.setHours(9);

        it('should render', () => {
            const name = 'Frank';

            const { baseElement } = render(<Greeting name={name} date={now} />);
            expect(baseElement).toMatchSnapshot();
            expect(screen.getByTestId('greeting')).toBeInTheDocument();
        });

        it('should display name', () => {
            render(<Greeting name={student.firstName} date={now} />);

            expect(screen.getByTestId('greeting')).toHaveTextContent(
                student.firstName
            );
        });

        it('should display morning greeting', () => {
            now.setHours(8);

            render(<Greeting name={student.firstName} date={now} />);

            expect(screen.getByTestId('greeting')).toHaveTextContent(
                'Good Morning'
            );
        });

        it('should display afternoon greeting', () => {
            now.setHours(14);

            render(<Greeting name={student.firstName} date={now} />);

            expect(screen.getByTestId('greeting')).toHaveTextContent(
                'Good Afternoon'
            );
        });

        it('should display evening greeting', () => {
            now.setHours(18);

            render(<Greeting name={student.firstName} date={now} />);

            expect(screen.getByTestId('greeting')).toHaveTextContent(
                'Good Evening'
            );
        });
    });
});
