import { axiosApi } from "./axiosApi";
import type { Post } from '@/types/api';//TODO how to make this working with Post type?


const postService = {
  //request is sent here: https://jsonplaceholder.typicode.com/posts

  getPosts: async function():Promise<[]>
  {
    const response = await axiosApi.get("/posts");
    console.log('response arrived to postService');
    return response.data;
  },

  getPost: async (postId: Number):Promise<{}> => 
  {
    const response = await axiosApi.get(`/posts/${postId}`);
    console.log('response arrived for getPost().');
    return response.data;
  },

  //This create post is specific, only for the https://jsonplaceholder.typicode.com/posts
  createPost: async (post:Post) => {
    const response = await axiosApi.post(
      '/posts',
      {
        // method: 'POST',
        body: JSON.stringify(post),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    console.log('response arrived for creatPost().', response);
  },

  updatePost: async (newPostObject: Post) =>
  {
    const response = await axiosApi.post(
      `/posts/${newPostObject}`,
      {
        // method: 'PUT',
        body: JSON.stringify(newPostObject),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    console.log('response arrived for getPost().', response);
  },
  
  deletePost: async (postId: Number) => {
    const response = await axiosApi.delete(`/posts/${postId}`);
    console.log('response arrived for deletePost().', response);
  }



    
  



}

export default postService;