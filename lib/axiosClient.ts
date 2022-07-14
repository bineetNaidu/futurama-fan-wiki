import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://futuramaapi.herokuapp.com/api',
});

export const fetcher = (path: string) =>
  axiosClient.get(path).then((res) => res.data);
