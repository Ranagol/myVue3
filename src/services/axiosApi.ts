import axios from "axios";

export const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
