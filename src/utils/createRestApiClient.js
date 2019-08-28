/**
 * This class implements REST API calls in an asynchronous way using promises.
 * This was written to explore the capability. However, will not be used as this had been deprecated with the
 * introcution of async/await based implementation (rest-api-client module).
 */
import axios from 'axios';
import { polyfill } from 'es6-promise';

polyfill();

/**
 * Creates a RESTful API client to read from RESTful services
 */
class RestApiClient {
    /**
     * Default constructor
     * @param config Configuration
     */
    constructor(config) {
        this.client = axios.create(config);
    }
    
    /**
     * Creates a RESTful request to the given end point
     * @param options Options
     * @returns {*|ClientHttp2Stream|http.ClientRequest}
     */
    request(options) {
        return this.client.request(options);
    }
}

const createRestApiClient = () => ({
    withConfig: config => new RestApiClient(config)
});

export default createRestApiClient;
