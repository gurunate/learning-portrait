import { RESTDataSource } from '@apollo/datasource-rest';
import log from '../../lib/logger/server';

export default class DataSource extends RESTDataSource {
    override baseURL = process.env.API_HOST;

    /**
     * Return a list of active users.
     *
     * @returns
     */
    async getUsers(): Promise<unknown> {
        log.debug('getUsers');

        return this.get('users');
    }

    /**
     * Create a user.
     *
     * @param input
     * @returns
     */
    async createUser(input: any): Promise<unknown> {
        log.debug({ input }, 'createUser');

        const { id, ...body } = input;

        return this.post('users', { body });
    }

    /**
     * Update a user.
     *
     * @param input
     * @returns
     */
    async updateUser(input: any): Promise<unknown> {
        log.debug({ input }, 'updateUser');

        const { id, ...body } = input;

        return this.put(`users/${id}`, { body });
    }

    /**
     * Delete a user.
     *
     * @param input
     * @returns
     */
    async deleteUser(input: any): Promise<unknown> {
        log.debug({ input }, 'deleteUser');

        const { id } = input;

        return this.delete(`users/${id}`);
    }
}
