<template>
  <h1>Testing</h1>

  <ul>
    <li v-for="(post, index) in posts" :key="index">{{ post.title }}</li>
  </ul> 

  <div>
    <p>Name: {{ name }} - Age: {{ age }}</p>
    <button @click="changeName('Zelda')">change name</button>
    <button @click="changeAge('30')">change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import postService from '@/services/postService';
import { reactive, ref } from 'vue';
import {onMounted} from "vue";
import type { Post } from '@/types/api';


export default defineComponent({
  name: 'Testing',
  components: {},
  data() {
    return {

      name: 'Link' as string,
      age: 25 as number | string,
      posts: []//TODO How to make this an array of Post objects? Like this... Post[]
    }
  },
  methods: {

    changeName(name: string): void {
      this.name = name;
    },

    changeAge(age: number | string): void {
      this.age = age;
    }
  },


  async mounted() {
    console.log(`the component is now mounted.`)
    // this.posts = await postService.getPosts();
    this.posts = await postService.getPost(1);
    // this.posts = await postService.getPosts();
    // this.posts = await postService.getPosts();
    // this.posts = await postService.getPosts();
    // this.posts = await postService.getPosts();
    // this.posts = await postService.getPosts();

    console.log('posts:', this.posts)
  }

});

</script>

<style scoped>

</style>