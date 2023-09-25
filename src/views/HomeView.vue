<template>
  <div>
    <h1>Home</h1>
    <p>Testx: {{ testx }}</p>

    <!-- <ul>
      <li v-for="(item, index2) in myArray" :key='index2'>{{ item }}</li>
    </ul> -->


    <!-- {{ posts }} -->
    
    <ul>
      <li v-for="(post, index) in posts" :key="index">{{ post }}</li>
    </ul>  
    <p>
      <p>Response:</p>
    </p>
  </div>
  
</template>

<script setup lang="ts">
import postService from '@/services/postService';
import { reactive, ref } from 'vue';
import type { Post } from '@/types/api';
import {onMounted} from "vue";


const testx = ref(2);
console.log('testx:', testx.value);
const myArray = ref(['apple', 'kiwi']);

let posts = ref([]);


onMounted( async () => {
  console.log("Mounted!");
  posts = await postService.getPosts();//TODO why is this not reactive in composition api, when I get the posts objects from backend?
  console.log('post:', posts)
});




</script>





<style scoped></style>