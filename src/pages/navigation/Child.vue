<template>
  <div style="background: red;">
    我是一个子组件，我在红色的海洋里！
    <input type="button" value="点我隐身" @click="upIsShow" />
  </div>
</template>
<script>
export default {
  methods: {
    // 第一次
    /* upIsShow() {
      this.$emit("upIsShow", false);
    }, */
    // 第二、三、四、五次
    upIsShow() {
      this.$emit("update:isShow", false);
    },
  },
};
</script>
        