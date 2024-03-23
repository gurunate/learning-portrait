import { RESTDataSource } from '@apollo/datasource-rest';
import log from '../../lib/logger/server';

export default class DataSource extends RESTDataSource {
    override baseURL = process.env.API_HOST;

    async getCourses(): Promise<unknown> {
        log.trace('getCourses');
        return this.get(`courses`);
    }

    async getObjectives({ id }): Promise<unknown> {
        log.trace(id, 'getObjectives');
        return this.get(`courses/${id}/objectives`);
    }
}
