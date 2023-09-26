import { axiosApi } from "./axiosApi";
import type { Post } from '@/types/api';


const postService = {
  //request is sent here: https://jsonplaceholder.typicode.com/posts

  getAll: async function():Promise<[]>
  {
    const response = await axiosApi.get("/posts");
    console.log('response arrived to postService');
    return response.data;
  },

  get: async (postId: Number):Promise<{}> => 
  {
    const response = await axiosApi.get(`/posts/${postId}`);
    console.log('response arrived for getPost().');
    return response.data;
  },

  //This create post is specific, only for the https://jsonplaceholder.typicode.com/posts
  create: async (post:Post):Promise<void> => {
    try {
      const response = await axiosApi.post('/posts', post);
    } catch (error) {
      console.log('error:', error)
    }
  },

  update: async (newPostObject: Post):Promise<void> =>
  {
    const response = await axiosApi.put(
      `/posts/${newPostObject.id}`,
      newPostObject
    );
  },
  
  delete: async (postId: Number) => {
    const response = await axiosApi.delete(`/posts/${postId}`);
    console.log('response arrived for deletePost().', response);
  }
}

export default postService;