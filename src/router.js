import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

function loadView(view) {
    return () => import(`@/views/${view}.vue`)
}

function loadComponent(comp) {
    return () => import(`@/components/${comp}.vue`)
}


export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: loadView('Home'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/form/:id',
      name: 'form',
      component: () => import('./views/Form.vue')
    },
  ]
})
