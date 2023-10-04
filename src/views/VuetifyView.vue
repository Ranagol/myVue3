<template>
  <v-app>
    <!-- //TODO Here I use Vuetify components. All is installed, all is good. But. The tab width is
    wrong, it is too narrow. How to set a normal width for the tabs and for the grid? Why is this
    not in the middle? -->
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