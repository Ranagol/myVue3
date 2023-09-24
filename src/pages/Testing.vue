<template>
  <h1>Testing</h1>

  <div class="app">
    <p>{{ name }} - {{ age }}</p>
    <button @click="changeName('Zelda')">change name</button>
    <button @click="changeAge('30')">change age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Testing',//todo why can't I see this component/data in Vue Dev Tool?
  components: {},
  data() {
    return {

      name: 'Link' as string,
      age: 25 as number | string,
    }
  },
  methods: {

    changeName(name: string): string {
      this.name = name;
      return name;
    },

    changeAge(age: number | string): string | number {
      this.age = age;
      return age;
    }
  }

});

</script>

<style scoped>

</style>