import * as fixtures from '@/lib/fixtures';

import ConversationsDialog, { conversationSchema } from '.';

import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

describe('ConversationsDialog', () => {
    describe('schema', () => {
        it('should require a message', async () => {
            await expect(
                conversationSchema.validateAt('message', { message: null })
            ).rejects.toBeTruthy();

            await expect(
                conversationSchema.validateAt('message', {
                    message: faker.lorem.word()
                })
            ).resolves.toBeTruthy();
        });
    });

    describe('component', () => {
        it('should render', () => {
            const handler = jest.fn();
            const courses = fixtures.courses(1);
            const student = fixtures.student();

            render(
                <ConversationsDialog
                    open
                    course={courses[0]}
                    courses={courses}
                    student={student}
                    onSend={handler}
                />
            );
        });
    });
});
