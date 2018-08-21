import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  // 在非生产环境下，使用严格模式
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    user
  }
})
