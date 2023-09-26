<template>
  <h1>Testing</h1>

  <p>{{ counterStore.count || 'sorry, we have state/count issues here.' }}</p>
  <p>{{ counterStore.doubleCount || 'sorry, we have getter Pinia issues here.' }}</p>
  <button @click="counterStore.randomizeCounter()">Randomize counter</button>


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
import { useCounterStore } from '@/stores/counter.ts' 

export default defineComponent({
  name: 'Testing',
  components: {},
  data() {
    return {
      name: 'Link' as string,
      age: 25 as number | string,
      posts: [],//TODO How to make this an array of Post objects? Like this... Post[]. Do I need to do this at all?
      dummyPost:  {
        userId: 66,
        id: 1,
        title: 'Andor title',
        body: 'This is Andor post body.'
      },
    }
  },

  //creating store object
  setup() {
    const counterStore = useCounterStore()
    console.log('counterStore:', counterStore)
    return { counterStore }
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
    this.posts = await postService.getAll();//works
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