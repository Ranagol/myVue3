<template>
  <div>
    <h1>Home</h1>
    <!--//todo Why is this below making an error when uncommented? -->
    <!-- <p>{{ testx }}</p> -->
    <ul>
      <li>ttt</li>
      <!-- <li v-for="(post, index) in posts" :key="index">{{ post }}</li> -->
      <!-- //TODO why do I have error here? -->
    </ul>  
  </div>
  
</template>

<script setup lang="ts">
import postService from '@/services/postService';
import { reactive, ref } from 'vue';
import type { Post } from '@/types/api';

const testx = ref(2);//todo why can't I see this in Vue Develop Tool?
console.log('testx:', testx.value);

let posts: Post[] | {} = reactive({});
posts = await postService.get();//TODO should I use await here too?
console.log('postsxxx:', posts)

</script>





<style scoped>

</style>