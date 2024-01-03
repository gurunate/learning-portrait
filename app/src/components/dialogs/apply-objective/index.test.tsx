import * as fixtures from '@/lib/fixtures';

import ApplyObjectiveDialog from '.';
import React from 'react';
import { render } from '@testing-library/react';

describe('ApplyObjectiveDialog', () => {
    describe('component', () => {
        it('should render', () => {
            const handleSearch = jest.fn();
            const handleSubmit = jest.fn();

            const courses = fixtures.courses(1);

            render(
                <ApplyObjectiveDialog
                    open
                    courses={courses}
                    onSearch={handleSearch}
                    onSubmit={handleSubmit}
                />
            );
        });
    });
});
