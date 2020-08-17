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
        component: () => import(/* webpackChunkName: "home" */ '../views/index.vue'),
      },
      {
        path: '/city',
        name: 'City',
        component: () => import(/* webpackChunkName: "home" */ '../views/city.vue'),
      },

      {
        path: '/news',
        name: 'News',
        component: () => import(/* webpackChunkName: "home" */ '../views/news.vue'),
      },
      {
        path: '/my',
        name: 'My',
        component: () => import(/* webpackChunkName: "home" */ '../views/my.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
  {
    path: '/edit',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/edit.vue'),
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import(/* webpackChunkName: "add" */ '../views/add.vue'),
  },
  {
    path: '/msgList',
    name: 'MsgList',
    component: () => import(/* webpackChunkName: "msgList" */ '../views/msgList.vue'),
  },
  {
    path: '/msgInfo',
    name: 'MsgInfo',
    component: () => import(/* webpackChunkName: "msgInfo" */ '../views/msgInfo.vue'),
  },
  {
    path: '/myVideo',
    name: 'MyVideo',
    component: () => import(/* webpackChunkName: "myVideo" */ '../views/myVideo.vue'),
  },
]

const router = new VueRouter({
  // mode: 'history',
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
