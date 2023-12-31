import NotificationsAvatar from '.';
import { render } from '@testing-library/react';

describe('NotificationsAvatar ', () => {
    describe('component', () => {
        it('should render', () => {
            render(<NotificationsAvatar total={2} />);
        });
    });
});
