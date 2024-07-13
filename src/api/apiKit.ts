import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const setApiKey = (apiKey: string) => {
  axiosInstance.defaults.headers.common['XToken'] = apiKey;
};

export const unsetApiKey = () => {
  delete axiosInstance.defaults.headers.common['XToken'];
};

export default axiosInstance;
