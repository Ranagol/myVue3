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
import postService from '@/services/postService';
import { reactive, ref } from 'vue';
import {onMounted} from "vue";

export default defineComponent({
  name: 'Testing',//todo why can't I see this component/data in Vue Dev Tool?
  components: {},
  data() {
    return {

      name: 'Link' as string,
      age: 25 as number | string,
      posts: [],
    }
  },
  methods: {

    changeName(name: string) {
      this.name = name;
    },

    changeAge(age: number | string) {
      this.age = age;
    }
  },


  async mounted() {
    console.log(`the component is now mounted.`)
    this.posts = await postService.get();
    console.log('posts:', this.posts)
  }

});

</script>

<style scoped>

</style>