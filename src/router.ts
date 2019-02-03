import Vue from 'vue';
import Router from 'vue-router';
import Home from './features/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/counter',
      name: 'counter',
      component: () => import('./features/Counter.vue'),
    }, {
      path: '/list',
      name: 'list',
      component: () => import('./features/List/List.vue'),
    }, {
      path: '/game',
      name: 'Game',
      component: () => import('./features/Game/Game.vue'),
    }, {
      path: '/settings',
      name: 'settings',
      component: () => import('./features/Settings/Settings.vue'),
    },
  ],
});
