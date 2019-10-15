import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/autor',
      component: () => import('./views/Autor.vue')
    },
    {
      path: '/livro',
      component: () => import('./views/Livro.vue')
    }
  ]
})
