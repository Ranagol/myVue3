import { axiosApi } from "./axiosApi";
import  { AxiosError } from 'axios';
import type { Post } from '@/types/api';


const postService = {

  get: async () => {
    const response = await axiosApi.get("/posts");
    console.log('response:', response.data);
    return response.data;
  }
  //TODO how to make this working with types?
  //TODO how to add a catch block to this?
}

export default postService;