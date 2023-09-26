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
import type { Ref } from 'vue'


const testx = ref(2);
console.log('testx:', testx.value);

//https://vuejs.org/guide/typescript/composition-api.html#typing-ref
//const year: Ref<string | number> = ref('2020')
let posts = ref<Promise | Post[]>([]);//TODO What type should I give to this?


onMounted( async () => {
  console.log("Mounted!");
  posts = await postService.getAll();//TODO why is this not reactive in composition api, when I get the posts objects from backend?
  console.log('post:', posts)
});




</script>





<style scoped></style>