import { RESTDataSource } from '@apollo/datasource-rest';
import log from '../../lib/logger/server';

export default class DataSource extends RESTDataSource {
    override baseURL = process.env.API_HOST;

    /**
     * Return a list of active objectives.
     *
     * @returns
     */
    async getObjectives(): Promise<unknown> {
        log.trace('getObjectives');

        return this.get(`objectives`);
    }

    /**
     * Create an objective.
     *
     * @param input
     * @returns
     */
    async createObjective(input: any): Promise<unknown> {
        log.debug({ input }, 'createObjective');

        const { id, ...body } = input;

        return this.post('objectives', { body });
    }

    /**
     * Update an objective.
     *
     * @param input
     * @returns
     */
    async updateObjective(input: any): Promise<unknown> {
        log.debug({ input }, 'updateObjective');

        const { id, ...body } = input;

        return this.put(`objectives/${id}`, { body });
    }

    /**
     * Delete an objective.
     *
     * @param input
     * @returns
     */
    async deleteObjective(input: any): Promise<unknown> {
        log.debug({ input }, 'deleteObjective');

        const { id } = input;

        return this.delete(`objectives/${id}`);
    }
}
