import { RESTDataSource } from '@apollo/datasource-rest';

export default class DataSource extends RESTDataSource {
    override baseURL = process.env.API_HOST;

    async getCourses(): Promise<unknown> {
        return this.get(`courses`);
    }
}
