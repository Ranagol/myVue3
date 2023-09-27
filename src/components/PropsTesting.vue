<template>
  <h4>PropsTesting component</h4>
  <p>Message: {{ message }}</p>
  <p>Post object: {{ post }}</p>

  <div>
    <p>Name: {{ name }} - Age: {{ age }}</p>
    <button @click="changeName('Zelda')">Change name</button>
    <button @click="changeAge('30')">Change age</button>

    <p>
      <h5>Emit testing</h5>
      <button
        @click="emitSomething(5)"
      >Emit testing button</button>
    </p>

    <p>
      <h5>Computed testing</h5>
      <div>Greeting: {{ greeting }}</div>
      <div>Post title: {{ postTitle }}</div>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Post } from '@/types/api';

export default defineComponent({
  props: {
    post: {
      //for a brief moment post is undefined - until the post object arrives from backend.
      // Vue warn]: Invalid prop: type check failed for prop "post". Expected Object, got Undefined  at <PropsTesting message="Link" post=undefined > 
      //TODO how to handle multiple possible types in props? Example either undefined or Object
      type: Object as PropType<Post>,
      required: true
    },
    message: {
      type: String,
      required: true,
      default:'Just the default text.'
    }
  },
  data() {
    return {
      name: 'Mario' as string,
      age: 25 as number | string,
    }
  },
  computed: {
    greeting():String 
    {
      return this.message + '!'
    },

    /**
     * Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'title')
     * //What too do, untill the post.title arrives from backend?
     */
    postTitle():String
    {
      if (this.post) {
        return this.post.title;
      }
      return 'post title will arrive soon.';
    }
  },
  

  /**
   * https://vuejs.org/guide/typescript/options-api.html#typing-component-props
   * 1-declaring what emits will be used in this component
   * https://v3-migration.vuejs.org/breaking-changes/emits-option.html
   */
  emits: ['myNumber'],

  methods: {

    changeName(name: string): void {
      this.name = name;
    },

    changeAge(age: number | string): void {
      this.age = age;
    },

    emitSomething(argumentToEmit: Number){
      this.$emit('myNumber', argumentToEmit);
    }
  },

  mounted(){
    console.log('title:', this.message); // Must use the props prefix.   !!!!
  }
});

</script>


<style scoped>

</style>