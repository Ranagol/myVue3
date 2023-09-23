<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
      <!-- //TODO why do I have error here? -->
    </ul>
  </div>
  
</template>

<script setup lang="ts">
import postService from '@/services/postService';
import { reactive } from 'vue';
import type { Post } from '@/types/api';

let posts: Post[] | {} = reactive({});


posts = postService.get();
console.log('postsxxx:', posts)

</script>

<style scoped>

</style>