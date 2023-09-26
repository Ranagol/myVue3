<template>
  <div>
    <h1>Home</h1>

    <p>Testx: {{ testx }}</p>

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
import { reactive, ref } from 'vue';
import type { Post } from '@/types/api';
import {onMounted} from "vue";
import type { Ref } from 'vue'


const testx = ref(2);
console.log('testx:', testx.value);

//https://vuejs.org/guide/typescript/composition-api.html#typing-ref
//const year: Ref<string | number> = ref('2020')
const data = reactive({//TODO still not appearing in Vue Dev Tool
  posts: [] as Post[],
});

onMounted( async () => {
  console.log("Mounted!");
  data.posts = await postService.getAll();
  console.log('post:', data.posts)
});



</script>


<style scoped></style>