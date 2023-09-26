import axios from "axios";

/**
 * Adding the base url to axios, which will be used in this app.
 */
export const axiosApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});
