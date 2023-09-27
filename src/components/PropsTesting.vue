<template>
  <h4>PropsTesting component</h4>
  <p>Message: {{ message }}</p>
  <p>Post object: {{ post }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Post } from '@/types/api';

export default defineComponent({
  props: {
    post: {
      type: Object as PropType<Post>,
      required: true
    },
    message: {
      type: String,
      required: true,
      default:'Just the default text.'
    }
  }
});

</script>


<style scoped>

</style>