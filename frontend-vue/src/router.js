import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/autor',
      name: 'autor',
      component: () => import('./views/Autor.vue')
    },
    {
      path: '/livro',
      name: 'livro',
      component: () => import('./views/Livro.vue')
    }
  ]
})
