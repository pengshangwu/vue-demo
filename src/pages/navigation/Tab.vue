<template>
  <div>
    <el-menu :default-active="$route.path"
             class="el-menu-demo"
             mode="horizontal"
             router
             @select="handleSelect">
      <el-menu-item index="/home">
        首页
      </el-menu-item>
      <el-menu-item index="/product">
        排行榜
      </el-menu-item>
      <el-menu-item index="/order">
        个人中心
      </el-menu-item>
      <el-menu-item index="/parent">
        父子组件
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: "Tab",
    data() {
      return {
        activeIndex: '/home'
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>

</style>
