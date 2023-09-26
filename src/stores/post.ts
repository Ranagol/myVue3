import { defineStore } from 'pinia';
import { postService } from '@/services/serviceTemplate';
import type { Post } from '@/types/api';

export const usePostStore = defineStore('post', {
  state: () => ({
    posts: [],
    post: {}
  }),

  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {

    async getAll(){
      try {
        this.posts = await postService.getAll();  
      } catch (error) {
        console.log('Something went wrong. Please try again.', error);
      }
    },

    async get(id: Number){
      try {
        this.post = await postService.get(id);  
      } catch (error) {
        console.log('Something went wrong. Please try again.', error);
      }
    },

    async create(item: Object){
      try {
        const response = await postService.create(item);
        this.getAll();//getting all posts from db, with the newly created post
        alert('Success!');  
      } catch (error) {
        console.log('Something went wrong. Please try again.', error);
      }
    },

    async update(updatedPost: Post){
      try {
        const response = await postService.update(updatedPost);//updating the db
        this.post = updatedPost;//replace in store post
        
        /**
         * replace in store posts
         * 1-get the index of the note that we want to update
         * 2-we use the index to find our note, and update it ot the new content
         */
        let index = this.posts.findIndex(post => post.id === updatedPost.id)//1
        this.posts[index] = updatedPost;//2

        alert('Success!');  
      } catch (error) {
        console.log('Something went wrong. Please try again.', error);  
      }
    },

    async delete(id: Number){
      try {
        const response = await postService.delete(id);//delete from backend
        
        /**
         * delete from store
         * 1-find the index of the post that we want to delete
         * 2 - delete it
         */
        let index = this.posts.findIndex(post => post.id === id);//1
        this.posts.splice(index, 1);//2

        alert('Success!');
      } catch (error) {
        console.log('Something went wrong. Please try again.', error);  
      }
    },
  },
})




