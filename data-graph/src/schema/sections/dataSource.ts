import { RESTDataSource } from '@apollo/datasource-rest';
import log from '../../lib/logger/server';

export default class DataSource extends RESTDataSource {
    override baseURL = process.env.API_HOST;

    /**
     * Return a list of active sections.
     *
     * @returns
     */
    async getSections(): Promise<unknown> {
        log.trace('getSections');

        return this.get(`sections`);
    }

    /**
     * Create a section.
     *
     * @param input
     * @returns
     */
    async createSection(input: any): Promise<unknown> {
        log.debug({ input }, 'createSection');

        const { id, ...body } = input;

        return this.post('sections', { body });
    }

    /**
     * Update a section.
     *
     * @param input
     * @returns
     */
    async updateSection(input: any): Promise<unknown> {
        log.debug({ input }, 'updateSection');

        const { id, ...body } = input;

        return this.put(`sections/${id}`, { body });
    }

    /**
     * Delete a section.
     *
     * @param input
     * @returns
     */
    async deleteSection(input: any): Promise<unknown> {
        log.debug({ input }, 'deleteSection');

        const { id } = input;

        return this.delete(`sections/${id}`);
    }
}
