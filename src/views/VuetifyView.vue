<template>
  <v-app>
    <v-container>
      <p>TAB</p>

      <v-tabs
        v-model="tab"
        bg-color="primary"
      >
        <!-- TAB NAMES, THE ACTUAL TAB PART -->
        <v-tab value="one">Tab 1</v-tab>
        <v-tab value="two">Tab 2</v-tab>
        <v-tab value="three">Tab 3</v-tab>
      </v-tabs>

      <!-- TAB BODY -->
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            Tab 1 content
          </v-window-item>

          <v-window-item value="two">
            Tab 2 content
          </v-window-item>

          <v-window-item value="three">
            Tab 3 content
          </v-window-item>
        </v-window>
      </v-card-text>

    </v-container>

    <hr>

    <p>GRID</p>
    <v-container class="bg-surface-variant">
      <v-row no-gutters>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="12"
          sm="4"
        >
          <v-sheet class="ma-2 pa-2">
            One of three columns
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>

  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data: () => ({
    tab: null,
  }),
});
</script>