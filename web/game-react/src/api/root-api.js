import axios from 'axios';


const rootApi = axios.create({
    baseURL: '/api',
    timeout: 30000,
    headers: {}
});

rootApi.interceptors.request.use(request => {

    // Add access token in header
    if (request.url === '/users') {
        const modifiedRequest = { ...request };
        modifiedRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('idToken')}`;
        return modifiedRequest;
    }
    return request;
}, error => Promise.reject(error));

export default rootApi;