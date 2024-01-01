import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import MessageCountAvatar from '.';
import { faker } from '@faker-js/faker';

describe('MessageCountAvatar ', () => {
    describe('component', () => {
        it('should render', () => {
            render(<MessageCountAvatar total={2} />);
        });

        it('should display correct total', () => {
            const total = faker.number.int({ min: 1, max: 13 });
            render(<MessageCountAvatar total={total} data-testid="messages" />);

            const element = screen.getByTestId('messages');
            expect(element).toBeInTheDocument();
            expect(element).toHaveTextContent(total.toString());
        });

        it('should non exist when total is empty', () => {
            const total = 0;
            render(<MessageCountAvatar total={total} data-testid="messages" />);

            const element = screen.queryByText(total);
            expect(element).toBeNull();
        });
    });
});
