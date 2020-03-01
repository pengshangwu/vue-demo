<template>

  <div>
    <h1>Home</h1>
    <h1>{{this.$store.state.count}}</h1>
    <button @click="increate">点我</button>
  </div>

</template>

<script>
  export default {
    name: "Home",
    methods: {
      increate() {
        this.$store.state.count++;
      }
    }
  }
</script>

<style>

</style>
