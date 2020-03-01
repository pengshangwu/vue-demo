<template>
  <div>
    <Tab></Tab>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  import Tab from './Tab'

  export default {
    name: "Layout",
    components: {
      Tab
    }
  }
</script>

<style lang="scss">
  .app-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    .main-container {
      margin-left: 200px; /* 后期可能做收缩导航栏位，应该是不能写死 */
    }
  }
</style>
