import log from '../../lib/logger/server';
import BaseDataSource from '../../lib/base-data-source';

export default class DataSource extends BaseDataSource {
    override baseURL = process.env.API_HOST;

    /**
     * Return a list of active instructors.
     *
     * @returns
     */
    async getInstructors(): Promise<unknown> {
        log.trace('getInstructors');

        return this.get(`instructors`);
    }

    /**
     * Create a instructor.
     *
     * @param input
     * @returns
     */
    async createInstructor(input: any): Promise<unknown> {
        log.debug({ input }, 'createInstructor');

        const { id, ...body } = input;

        return this.post('instructors', {
            body: {
                ...body,
                updatedById: 'clrmi4e960000kghtbjcdn5gh',
                createdById: 'clrmi4e960000kghtbjcdn5gh'
            }
        });
    }

    /**
     * Update a instructor.
     *
     * @param input
     * @returns
     */
    async updateInstructor(input: any): Promise<unknown> {
        log.debug({ input }, 'updateInstructor');

        const { id, ...body } = input;

        return this.put(`instructors/${id}`, { body });
    }

    /**
     * Delete a instructor.
     *
     * @param input
     * @returns
     */
    async deleteInstructor(input: any): Promise<unknown> {
        log.debug({ input }, 'deleteInstructor');

        const { id } = input;

        return this.delete(`instructors/${id}`);
    }
}
