<template>
  <h1>Testing component</h1>

  <div
   v-if="isEmitted"
  >Emit was triggered: {{ numberEmitted }}</div>

  <div
    v-else
  >Emit was not triggered - yet.</div>

  <hr>

  <!-- CHILD COMPONENT WITH PROPS AND EMIT -->
  <PropsTesting
    :message="message"
    :post="postStore.posts[1]"
    @my-number="doThis"
  />

  <!-- <p>{{ counterStore.count || 'sorry, we have state/count issues here.' }}</p>
  <p>{{ counterStore.doubleCount || 'sorry, we have getter Pinia issues here.' }}</p>
  <button @click="counterStore.randomizeCounter()">Randomize counter</button> -->

  <ul>
    <!-- <li v-for="(post, index) in postStore.posts" :key="index">{{ post.id }}</li> -->
  </ul> 

  
</template>   

<script lang="ts">
import { defineComponent } from 'vue';
import type { Post } from '@/types/api';
import { useCounterStore } from '@/stores/counter' 
import { usePostStore } from '@/stores/post';
import PropsTesting from '@/components/PropsTesting.vue';

export default defineComponent({
  name: 'Testing',
  components: {
    PropsTesting,
  },
  data() {
    return {
      name: 'Mario' as string,
      message: 'Message from parent' as string,
      age: 25 as number | string,
     posts: [] as Array<Post>,
      dummyPost:  {
        userId: 66,
        id: 1,
        title: 'Andor title',
        body: 'This is Andor post body.'
      },
      isEmitted: false,
      numberEmitted: 0
    }
  },
  methods: {
    doThis(argumentReceived: number){
      this.isEmitted = true;
      this.numberEmitted = argumentReceived;
    }
  },

  //creating store object
  setup() {
    const counterStore = useCounterStore();
    const postStore = usePostStore();
    return { counterStore, postStore }
  },


  async mounted() {
    this.postStore.getAll();
    console.log('posts in store:', this.postStore.posts);

    // this.postStore.get(1);
    // console.log('1 unique post in store:', this.postStore.post);

    // this.postStore.delete(1);

    // this.posts = await postService.getAll();//works
    // this.posts = await postService.get(1);//works
    // this.posts = await postService.create(this.dummyPost);//works
    // this.posts = await postService.update(this.dummyPost);//works
    // this.posts = await postService.delete(1);//works
  }

});

</script>

<style scoped>

</style>

