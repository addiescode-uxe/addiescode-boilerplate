import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { BASE_URL_CONFIG } from './config';

export const apiInstance = axios.create({
  baseURL: BASE_URL_CONFIG,
  timeout: 100000,
});

//BASE_URL
export const BASE_URL = BASE_URL_CONFIG;

//API_URL
export const URL_TODOS_GET = `https://jsonplaceholder.typicode.com/posts/`;
export const URL_TODO_GET = (id: number) =>
  `https://jsonplaceholder.typicode.com/users/${id}/posts`;

export const request = <T>(
  config: AxiosRequestConfig,
  onSuccess: (value: AxiosResponse<T>) => void,
  onError: (reason: any) => void
) => {
  const client = apiInstance;
  return client(config).then(onSuccess).catch(onError);
};
