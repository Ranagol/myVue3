import { axiosApi } from "./axiosApi";
import type { AxiosApi } from "@/types/api";
import type { Post } from '@/types/api';


/**
 * request is sent here: //request is sent here: https://jsonplaceholder.typicode.com/postsposts. Thisis our backend.
 */
class ServiceTemplate {

  /**
   * Example: we want this url: https://jsonplaceholder.typicode.com/posts
   * This url contains the base url already in axiosApi, so we just need to add 'posts', if we
   * are working with posts objects.
   * 'posts', without /
   */
  url:String;

  /**
   * Instance of axios, with the base url in it.
   */
  axiosApi:AxiosApi = axiosApi;

  /**
   * [constructor description]
   *
   * @param   {AxiosApi}  axiosApi  This is the modified axios object with the 
   * https://jsonplaceholder.typicode.com base url
   * 
   * @param   {String}  url       This is the additinal needed url. Example: '/posts'.
   *
   */
  constructor(url:String) {
    this.url = url;
  }

  async getAll():Promise<Post[]>
  {
    const response = await this.axiosApi.get(`/${this.url}`);
    console.log('response arrived', response);
    return response.data;
  }

  async get(id: Number):Promise<Post>
  {
    const response = await this.axiosApi.get(`/${this.url}/${id}`);
    console.log('response arrived', response);
    return response.data;
  }

  //This create post is specific, only for the https://jsonplaceholder.typicode.com/posts
  async create(item:Object):Promise<void>
  {
    try {
      const response = await this.axiosApi.post(`/${this.url}`, item);
      console.log('response:', response);
    } catch (error) {
      console.log('error:', error)
    }
  }

  //Make sure to use id = 1 with jsonplaceholder backend.
  async update(updatedItem: Post):Promise<void>
  {
    const response = await this.axiosApi.put(`/${this.url}/${updatedItem.id}`,updatedItem);
    console.log('response:', response);
  }
  
  async delete(id: Number):Promise<void>
  {
    const response = await this.axiosApi.delete(`/${this.url}/${id}`);
    console.log('response arrived for deletePost().', response);
  }

}

export const postService = new ServiceTemplate('posts');
