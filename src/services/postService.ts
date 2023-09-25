import { axiosApi } from "./axiosApi";
import  { AxiosError } from 'axios';
import type { Post } from '@/types/api';


const postService = {
  //request is sent here: https://jsonplaceholder.typicode.com/posts

  get: async function(){
  
    const response = await axiosApi.get("/posts");
    console.log('response arrived to postService');
    return response.data;
  

    // try {
    //   const response = await axiosApi.get("/posts");
    //   console.log('response arrived to postService');
    //   return response.data;
    // } catch (error) {
    //   console.log('error:', error)
    // }
    
  }
    
  



  //TODO how to make this working with types?
  //TODO how to add a catch block to this?
}

export default postService;