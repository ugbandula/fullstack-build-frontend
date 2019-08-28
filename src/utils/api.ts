import axios from 'axios';

/**
 * Implements the GET data request from a RESTful end point
 * @param url URL of the RETSful end point
 */
export async function apiGETRequest(url: string) : Promise<any> {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (e) {
        return null;
    }
}

/**
 * Implements the POST data request from a RESTful end point
 * @param url URL of the RETSful end point
 * @param payload Payload to be sent
 */
export async function apiPOSTRequest(url: string, payload: object) : Promise<any> {
    try {
        const response = await axios.post(url, payload);
        return response.data;
    } catch (e) {
        return null;
    }
}

/**
 * Implements the PUT data request from a RESTful end point
 * @param url URL of the RETSful end point
 * @param payload Payload to be sent
 */
export async function apiPUTRequest(url: string, payload: object) : Promise<any> {
    try {
        const response = await axios.put(url, payload);
        return response.data;
    } catch (e) {
        return null;
    }
}

/**
 * An experimental implementation
 * @param method
 * @param url
 * @param data
 */
// export async function makeRequest(method: string, url: string, data: string) : Promise<any> {
//     try {
//         const config = {
//             method: method,
//             url: url,
//             data: data
//         };
//         const response = await axios(config);
//         return response.data;
//     } catch (e) {
//         return null;
//     }
//
// }
