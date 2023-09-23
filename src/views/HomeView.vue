<template>
  <h1>Home</h1>
</template>

<script setup lang="ts">
import postService from '@/services/postService';

const posts = await postService.get();
console.log('posts:', posts);

</script>

<style scoped>

</style>