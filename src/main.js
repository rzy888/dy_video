import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// 引入mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 引入字体图标
import '@/assets/iconfont/iconfont.css'
// 挂载vue整屏滚动切换组件vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

import './assets/js/rem.js'

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)

Vue.prototype.$http = axios
//配置请求接口的根路径
axios.defaults.baseURL = 'https://www.fastmock.site/mock/6375cc318ec31f94591712e5d66c22d8/dy_api/'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
