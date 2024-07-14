import log from '../../lib/logger/server';
import BaseDataSource from '../../lib/base-data-source';

export default class DataSource extends BaseDataSource {
    override baseURL = process.env.API_HOST;

    /**
     * Return a list of active students.
     *
     * @returns
     */
    async getStudents(): Promise<unknown> {
        log.trace('getStudents');

        return this.get(`students`);
    }

    /**
     * Create a student.
     *
     * @param input
     * @returns
     */
    async createStudent(input: any): Promise<unknown> {
        log.debug({ input }, 'createStudent');

        const { id, ...body } = input;

        return this.post('students', {
            body: {
                ...body,
                updatedById: 'clrmi4e960000kghtbjcdn5gh',
                createdById: 'clrmi4e960000kghtbjcdn5gh'
            }
        });
    }

    /**
     * Update a student.
     *
     * @param input
     * @returns
     */
    async updateStudent(input: any): Promise<unknown> {
        log.debug({ input }, 'updateStudent');

        const { id, ...body } = input;

        return this.put(`students/${id}`, { body });
    }

    /**
     * Delete a student.
     *
     * @param input
     * @returns
     */
    async deleteStudent(input: any): Promise<unknown> {
        log.debug({ input }, 'deleteStudent');

        const { id } = input;

        return this.delete(`students/${id}`);
    }
}
