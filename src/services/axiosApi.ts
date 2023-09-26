import axios from "axios";//TODO is this a good way of thinking?

export const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
