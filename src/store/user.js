import Vue from 'vue'
import { Message } from 'element-ui'
import axios from 'axios'
import Bus from '../lib/bus'
import utils from "../lib/utils"

export default {
  state: {
    username: '小明',
    role: 'user',
    _id: '1234567890'
  },
  mutations: {
    setUser (state, user) {
      for (let k in user) {
        Vue.set(state, k, user[k])
      }
    },
    removeUser (state) {
      for (let k in state) {
        Vue.set(state, k, '')
      }
    }
  },
  actions: {
    getUserInfo ({commit}) {
      let user = utils.getUserFromLocal()
      console.log('本地获取的cookie', user)
      if (!(user && user._id)) {
        return false
      }

      axios.get('/api/user/profile')
      .then((res) => {
        console.log('本地获取的用户资料', res.data)
        commit('setUser', res.data)
        Bus.$emit('onGetUserInfoSuccess', res.data)
      })
      .catch((err) => {
        Message.error(`获取用户资料失败：${err}`)
      })
    },
    setUserInfo ({commit }, userInfo) {
      if (!userInfo || !userInfo._id) {
        return false
      }
      commit('setUser', userInfo)
    },
    logout ({commit}) {
      axios.post('/api/logout')
      .then(() => {
        utils.delUserFromLocal()
        commit('removeUser')
        Message.success('退出登录成功')
        location.href = '/'
      })
      .catch((err) => {
        Message.error(`退出登录失败：${err}`)
      })
    }
  }
}
