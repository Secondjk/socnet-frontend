import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Temp from '@/views/Temp.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: Temp
  }
];

const router = new VueRouter({
  routes
});

export default router;
