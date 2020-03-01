<template>
  <div>
    <h1>Product</h1>
    <h1>{{count}}</h1>
    <h1>{{address}}</h1>
    <h1>{{name}}</h1>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "Product",
    computed: {
      ...mapState([
        'count',
        'name',
        'address'
      ])
    },
  }
</script>

<style>

</style>
