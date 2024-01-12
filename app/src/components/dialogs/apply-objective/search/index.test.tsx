import * as fixtures from '@/lib/fixtures';

import Search, { searchSchema } from '.';

import React from 'react';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';

describe('ApplyObjectiveDialog: Search', () => {
    describe('schema', () => {
        it('should require a search Term', async () => {
            await expect(
                searchSchema.validateAt('term', { term: null })
            ).rejects.toBeTruthy();

            await expect(
                searchSchema.validateAt('term', { term: faker.lorem.word() })
            ).resolves.toBeTruthy();
        });
    });

    describe('component', () => {
        it('should render', () => {
            const handleError = jest.fn();
            const handleSearch = jest.fn();

            render(<Search onSearch={handleSearch} onError={handleError} />);
        });
    });
});
