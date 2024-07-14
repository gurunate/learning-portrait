import log from '../../lib/logger/server';
import BaseDataSource from '../../lib/base-data-source';

export default class DataSource extends BaseDataSource {
    override baseURL = process.env.API_HOST;

    /**
     * Return a list of active organizations.
     *
     * @returns
     */
    async getOrganizations(): Promise<unknown> {
        log.trace('getOrganizations');

        return this.get(`organizations`);
    }

    /**
     * Create a organization.
     *
     * @param input
     * @returns
     */
    async createOrganization(input: any): Promise<unknown> {
        log.debug({ input }, 'createOrganization');

        const { id, ...body } = input;

        return this.post('organizations', { body });
    }

    /**
     * Update a organization.
     *
     * @param input
     * @returns
     */
    async updateOrganization(input: any): Promise<unknown> {
        log.debug({ input }, 'updateOrganization');

        const { id, ...body } = input;

        return this.put(`organizations/${id}`, { body });
    }

    /**
     * Delete a organization.
     *
     * @param input
     * @returns
     */
    async deleteOrganization(input: any): Promise<unknown> {
        log.debug({ input }, 'deleteOrganization');

        const { id } = input;

        return this.delete(`organizations/${id}`);
    }
}
