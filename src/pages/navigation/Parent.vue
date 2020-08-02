<template>
  <div>
      <!-- 父传值给子，通过prop，子传值给父，通过this.$emit(update:my-prop-name, [传递的值]) 
      模式类代替事件的触发, 此时 子组件中 [传递的值] 刚好和 父组件中的 my-prop-name 值进行绑定, 
      也即，父组件是 :my-prop-name.sync="my-prop-name123" -->
      <!-- https://www.jianshu.com/p/d42c508ea9de https://www.jb51.net/article/140581.htm 相关文章 -->
    <input type="button" value="我是父组件中的按钮" @click="show" />
    <!-- <child v-show="isShow" /> -->
    <!-- 第一次 -->
    <!-- <child @upIsShow="changeIsShow" v-show="isShow"/> -->
    <!-- 第二次 -->
    <!-- <child @update:isShow="changeIsShow" v-show="isShow"/> -->
    <!-- 第三次 和 第二次的子是一致的 -->
    <!-- <child @update:isShow="function(bol){isShow=bol}" v-show="isShow"/> -->
    <!-- 第四次 -->
    <!-- <child @update:isShow="bol=>isShow=bol" v-show="isShow"/> -->
    <!-- 第五次 -->
    <!-- .sync属于语法糖 -->
    <child :isShow.sync="isShow1" v-show="isShow1"/>
  </div>
</template>

<script>
import child from "./Child";
export default {
  data() {
    return {
      isShow1: false,
    };
  },
  components: {
    child,
  },
  methods: {
    show() {
      this.isShow1 = true;
    },
    changeIsShow(bol) {
      this.isShow1 = bol;
    },
  },
};
</script>
<style scoped>
</style>