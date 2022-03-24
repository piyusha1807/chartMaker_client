import Axios from '../utils/http-utils';

export const API_ENDPOINT = process.env.BACKEND_URL || 'http://localhost:3001';

const AxiosClass: any = Axios;
const AxiosInstance = new AxiosClass(API_ENDPOINT);

export default AxiosInstance;
