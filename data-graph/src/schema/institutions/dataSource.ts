import BaseDataSource from '../../lib/base-data-source';
import log from '../../lib/logger/server';

export default class DataSource extends BaseDataSource {
    override baseURL = process.env.API_HOST;

    /**
     * Return a list of active institutions.
     *
     * @returns
     */
    async getInstitutions(): Promise<unknown> {
        log.trace('getInstitutions');

        return this.get(`institutions`);
    }

    /**
     * Create a institution.
     *
     * @param input
     * @returns
     */
    async createInstitution(input: any): Promise<unknown> {
        log.debug({ input }, 'createInstitution');

        const { id, ...body } = input;

        return this.post('institutions', { body });
    }

    /**
     * Update a institution.
     *
     * @param input
     * @returns
     */
    async updateInstitution(input: any): Promise<unknown> {
        log.debug({ input }, 'updateInstitution');

        const { id, ...body } = input;

        return this.put(`institutions/${id}`, { body });
    }

    /**
     * Delete a institution.
     *
     * @param input
     * @returns
     */
    async deleteInstitution(input: any): Promise<unknown> {
        log.debug({ input }, 'deleteInstitution');

        const { id } = input;

        return this.delete(`institutions/${id}`);
    }
}
