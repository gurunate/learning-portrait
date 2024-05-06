import { RESTDataSource } from '@apollo/datasource-rest';
import log from '../../lib/logger/server';

export default class DataSource extends RESTDataSource {
    override baseURL = process.env.API_HOST;

    /**
     * Return a list of active courses.
     *
     * @returns
     */
    async getCourses(): Promise<unknown> {
        log.trace('getCourses');

        return this.get(`courses`);
    }

    /**
     * Create a course.
     *
     * @param input
     * @returns
     */
    async createCourse(input: any): Promise<unknown> {
        log.debug({ input }, 'createCourse');

        const { id, ...body } = input;

        return this.post('courses', { body });
    }

    /**
     * Update a course.
     *
     * @param input
     * @returns
     */
    async updateCourse(input: any): Promise<unknown> {
        log.debug({ input }, 'updateCourse');

        const { id, ...body } = input;

        return this.put(`courses/${id}`, { body });
    }

    /**
     * Delete a course.
     *
     * @param input
     * @returns
     */
    async deleteCourse(input: any): Promise<unknown> {
        log.debug({ input }, 'deleteCourse');

        const { id } = input;

        return this.delete(`courses/${id}`);
    }
}
