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
import { postService } from '@/services/serviceTemplate.ts';
import { onMounted } from "vue";
import type { Post } from '@/types/api';

export default defineComponent({
  name: 'Testing',
  components: {},
  data() {
    return {

      name: 'Link' as string,
      age: 25 as number | string,
      posts: [],//TODO How to make this an array of Post objects? Like this... Post[]
      dummyPost:  {
        userId: 66,
        id: 1,
        title: 'Andor title',
        body: 'This is Andor post body.'
      },
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
    // this.posts = await postService.getAll();//works
    // this.posts = await postService.get(1);//works
    // this.posts = await postService.create(this.dummyPost);//works
    // this.posts = await postService.update(this.dummyPost);//works
    // this.posts = await postService.delete(1);//works

    console.log('posts:', this.posts)
  }

});

</script>

<style scoped>

</style>