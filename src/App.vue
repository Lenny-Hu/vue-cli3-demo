<template lang="pug">
  #app
    m-header
    router-link(to="/") 首页
    span |
    router-link(to="/about") 关于
    hr
    router-view
    hr
    HelloWorld(msg="页脚")
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Bus from './lib/bus'

export default {
  name: 'app',
  components: {
    HelloWorld,
    'm-header': Header
  },
  created () {
    this.$store.dispatch('getUserInfo') // 获取用户资料

    // 监听获取用户资料完成事件
    Bus.$off('onGetUserInfoSuccess')
    Bus.$on('onGetUserInfoSuccess', (data) => {
      console.log('获取用户资料完成', data)
    })
  }
}
</script>

<style lang="less">
@import "./assets/styles/reset.less";
@import "./assets/styles/main.less";
</style>
