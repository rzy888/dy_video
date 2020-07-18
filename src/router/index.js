import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/views/index.vue'
import City from '@/views/city.vue'
import Add from '@/views/add.vue'
import News from '@/views/news.vue'
import My from '@/views/my.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/city',
    name: 'City',
    component: City,
  },
  {
    path: '/add',
    name: 'Add',
    component: Add,
  },
  {
    path: '/news',
    name: 'News',
    component: News,
  },
  {
    path: '/my',
    name: 'My',
    component: My,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
