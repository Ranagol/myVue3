<template>
  <v-app style="width: 1400px;">
    <div>
      <h1>Home</h1>
      <p>Testx: {{ data.testx }}</p>
      <p>Posts: {{ postStore.posts[1] }}</p>
      
      <ul>

        <!-- Your post.id is a "Number" (the TypeScript Type, with the capital N), in a attribute 
          value for the html somehow only "string | number | symbol | undefined" is allowed and 
          even is Number has a magic toString(), it's shows as Error in VSCode. That is why here 
          we must use the :key="post.id.toString(), to make all this work with TS-->
        <li 
          v-for="post in postStore.posts" 
          :key="post.id.toString()"
        >{{ post.title }}</li>

      </ul>  
    </div>
  </v-app>
  
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import type { Post } from '@/types/api';
import {onMounted} from "vue";
import { usePostStore } from '@/stores/post';

const data = reactive({
  posts: [] as Post[],
  //How to solve this error?
  testx: 2,//TODO TypeError: Cannot read properties of undefined (reading 'testx')
  //TODO another error: Failed to resolve component: v-appIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.
});

const postStore = usePostStore();

onMounted( async () => {
  console.log("Composition api component mounted!");
  await postStore.getAll();
  console.log('post:', postStore.posts)
});

</script>
