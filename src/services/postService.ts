import { axiosApi } from "./axiosApi";
import type { ErrorFromApi } from '@/types/api';

const postService = {

  get: async () => {
    try {
      const response = await axiosApi.get("/posts");
      // console.log('response:', response.data);
      return response.data;
    } catch (error) {
      // console.log('error:', error);
      console.log('error:', error.message);

      return error;
    }
  }
}

export default postService;