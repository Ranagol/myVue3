<template>
  <div>
    <h1>Home</h1>

    <p>Testx: {{ data.testx }}</p>

    <p>Posts: {{ data.posts[1] }}</p>
    
    <ul>
      <li v-for="(post, index) in data.posts" :key="index">{{ post }}</li>
    </ul>  

    <p>
      <p>Response:</p>
    </p>

  </div>
  
</template>

<script setup lang="ts">
import postService from '@/services/postService';
import { reactive } from 'vue';
import type { Post } from '@/types/api';
import {onMounted} from "vue";

const data = reactive({
  posts: [] as Post[],
  testx: 2,
});

onMounted( async () => {
  console.log("Mounted!");
  data.posts = await postService.getAll();
  console.log('post:', data.posts)
});



</script>


<style scoped></style>