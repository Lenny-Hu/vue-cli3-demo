<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" :router="true" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/about">关于</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "Header",
    data () {
      return {
        activeIndex: '/',
      }
    },
    methods: {
      handleSelect (data) {
        console.log('选中的菜单', data)
      },
      setDefaultIndex () {
        this.activeIndex = this.$router.currentRoute.path
      }
    },
    watch: {
      '$route' () {
        // 设置菜单选中状态
        this.setDefaultIndex()
      }
    }
  }
</script>

<style scoped>

</style>