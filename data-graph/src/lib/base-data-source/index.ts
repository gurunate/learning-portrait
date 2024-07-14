import https from 'https';
import { AugmentedRequest, RESTDataSource } from '@apollo/datasource-rest';

/**
 * A standard reusable base REST data source.
 */
class BaseDataSource extends RESTDataSource {
    override async willSendRequest(_path: string, request: AugmentedRequest) {
        // @ts-ignore
        request.agent = new https.Agent({ rejectUnauthorized: false });
    }
}

export default BaseDataSource;
