<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon><v-icon icon="$vuetify"></v-icon></v-app-bar-nav-icon>
      <v-toolbar-title>VuetifyView</v-toolbar-title>
      <!-- <v-spacer></v-spacer> -->
      <v-btn to="/" rounded>Home</v-btn>
      <v-btn to="/about" rounded>About</v-btn>
      <v-btn to="/testing" rounded>Testing</v-btn>
      <v-btn to="/vuetify" rounded>Vuetify</v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
    
  </v-app>
</template>








<style scoped>
</style>
