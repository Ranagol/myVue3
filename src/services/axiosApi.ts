import axios from "axios";//TODO is this a good way of thinking?

/**
 * Adding the base url to axios, which will be used in this app.
 */
export const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
