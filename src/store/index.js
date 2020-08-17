import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    myInfo: {},
    num: 0,
  },
  mutations: {
    // 存储我的信息
    init_myInfo(state, data) {
      state.myInfo = data
    },
    // 存储编辑资料进度
    init_num(state) {
      let a = 0
      let i = 0
      for (let key in state.myInfo) {
        i++
        if (state.myInfo[key] != '') {
          a++
        }
      }
      state.num = parseInt((a / i) * 100)
    },
  },
  actions: {
    // 获取我的信息
    getMyInfo(context) {
      Vue.prototype.$http
        .get('/userInfo')
        .then((res) => {
          context.commit('init_myInfo', res.data)
          context.commit('init_num')
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  modules: {},
})
