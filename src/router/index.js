import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('../views/index.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import('../views/city.vue'),
      },
      {
        path: '/add',
        name: 'Add',
        component: () => import('../views/add.vue'),
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../views/news.vue'),
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../views/my.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
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
// 全局导航守卫
router.beforeEach((to, from, next) => {
  const uname = window.localStorage.getItem('uname')
  if (!uname) {
    if (to.path == '/my' || to.path == '/news' || to.path == '/add' || to.path == '/city') {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
