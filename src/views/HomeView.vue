<template>
  <div>
    <h1>Home</h1>
    <p>Testx: {{ data.testx }}</p>
    <p>Posts: {{ postStore.posts[1] }}</p>
    
    <ul>
      <!-- //TODO why do I have TS error here? :key -->
      <li v-for="post in postStore.posts" :key="post.id">{{ post.title }}</li>
    </ul>  
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { Post } from '@/types/api';
import {onMounted} from "vue";
import { usePostStore } from '@/stores/post';

const data = reactive({
  posts: [] as Post[],
  testx: 2,
});

const postStore = usePostStore();

onMounted( async () => {
  console.log("Composition api component mounted!");
  await postStore.getAll();
  console.log('post:', postStore.posts)
});



</script>


<style scoped></style>