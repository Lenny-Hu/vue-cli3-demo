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

export default {
  name: 'app',
  components: {
    HelloWorld,
    'm-header': Header
  }
}
</script>

<style lang="less">
@import "./assets/styles/reset.less";
@import "./assets/styles/main.less";
</style>
