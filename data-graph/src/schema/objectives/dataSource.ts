import { RESTDataSource } from '@apollo/datasource-rest';
import qs from 'qs';

export default class DataSource extends RESTDataSource {
    override baseURL = process.env.API_HOST;

    async getObjectives({ courseId }): Promise<unknown> {
        return this.get(`objectives?${qs.stringify({ courseId })}`);
    }
}
