import { createRouter, createWebHistory } from 'vue-router';
import Home from '/src/components/Home.vue';
import Settings from '/src/components/Settings.vue';
import About from '/src/components/About.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active',
});

export default router;
