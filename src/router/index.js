import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'SecureForm',
    component: () => import('../views/SecureForm.vue')
  },
  {
    path: '/cache/discover',
    name: 'Discover',
    component: () => import('../views/Prototype2/Discover.vue')
  },
  {
    path: '/cache/browse',
    name: 'Browse',
    component: () => import('../views/Prototype2/Browse.vue')
  },
  {
    path: '/cache/favorites',
    name: 'Favorites',
    component: () => import('../views/Prototype2/Favorites.vue')
  },
  {
    path: '/cache/more',
    name: 'More',
    component: () => import('../views/Prototype2/More.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
