import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import Testing from '@/pages/Testing.vue';
import VuetifyView from '@/views/VuetifyView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/testing',
      name: 'testing',
      component: Testing
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: VuetifyView
    },
  ]
})

export default router



