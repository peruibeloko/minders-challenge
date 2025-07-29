import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import Houses from './components/Houses.vue';

export const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/houses',
      name: 'houses',
      component: Houses,
      props: true
    }
  ]
});
