import axios from 'axios';
import {auth} from "../service/firebase";


const rootApi = axios.create({
    baseURL: '/api',
    timeout: 30000,
    headers: {}
});

rootApi.interceptors.request.use(async (request) => {
    const token = await auth.currentUser.getIdToken(false)
    const modifiedRequest = { ...request };
    modifiedRequest.headers['Authorization'] = `Bearer ${token}`;
    return modifiedRequest;

}, error => Promise.reject(error));

export default rootApi;