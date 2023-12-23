import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import Copyright from '.';
import { faker } from '@faker-js/faker';

describe('Copyright', () => {
    describe('component', () => {
        it('should render', () => {
            const { baseElement } = render(<Copyright year="2000" />);
            expect(baseElement).toMatchSnapshot();
            expect(screen.getByTestId('copyright')).toBeInTheDocument();
        });

        it('should render the year', () => {
            const date = faker.date.future();
            const year = date.getFullYear();

            render(<Copyright year={year} />);
            expect(screen.getByTestId('copyright')).toHaveTextContent(
                year.toString()
            );
        });
    });
});
