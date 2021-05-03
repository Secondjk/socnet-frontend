import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const title = (name: string) => ({ title: `Messenger - ${name}`, name });

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Main',
    redirect: '/my-page'
  },
  {
    path: '/my-page',
    name: 'my-page',
    meta: title('Моя страница'),
    component: () => import("@/views/common/Temp.vue")
  },
  {
    path: '/friends',
    name: 'friends',
    meta: title('Друзья'),
    component: () => import("@/views/sections/Friends.vue")
  },
  {
    path: '/chat',
    name: 'chat',
    meta: title('Мессенджер'),
    component: () => import("@/views/common/Temp.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
