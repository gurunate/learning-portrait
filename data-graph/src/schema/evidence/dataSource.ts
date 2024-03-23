import { RESTDataSource } from '@apollo/datasource-rest';
import log from '../../lib/logger/server';

export default class DataSource extends RESTDataSource {
    override baseURL = process.env.API_HOST;

    /**
     * Return a list of active evidence.
     *
     * @returns
     */
    async getEvidence(): Promise<unknown> {
        log.trace('getEvidence');

        return this.get(`evidence`);
    }

    /**
     * Create a piece of evidence.
     *
     * @param input
     * @returns
     */
    async createEvidence(input: any): Promise<unknown> {
        log.debug({ input }, 'createEvidence');

        const { id, ...body } = input;

        return this.post('evidence', { body });
    }

    /**
     * Update a piece of evidence.
     *
     * @param input
     * @returns
     */
    async updateEvidence(input: any): Promise<unknown> {
        log.debug({ input }, 'updateEvidence');

        const { id, ...body } = input;

        return this.put(`evidence/${id}`, { body });
    }

    /**
     * Delete a piece of evidence.
     *
     * @param input
     * @returns
     */
    async deleteEvidence(input: any): Promise<unknown> {
        log.debug({ input }, 'deleteEvidence');

        const { id } = input;

        return this.delete(`evidence/${id}`);
    }
}
