<template>
  <div>
    <h1>Order</h1>
    <h1>{{this.$store.state.count}}</h1>
    <h1>{{this.$store.state.name}}</h1>
    <h1>{{this.$store.state.address}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Order"
  }
</script>

<style>

</style>
