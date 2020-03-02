<template>
  <div>
    <h1>1、state/mapState demo</h1>
    <h2>1.1、mapState</h2>
    <h3>{{count}}</h3>
    <h3>{{address}}</h3>
    <h3>{{name}}</h3>
    <h3>1.2、state</h3>
    <h3>{{this.$store.state.count}}</h3>

    <h1>2、getter/mapGetters demo</h1>
    <h2>2.1、getter/todo is true</h2>
    <h3>{{this.$store.state.todos.length}}</h3>

    <h2>2.2、mapGetters/todo is true</h2>
    <ul>
      <li v-for="item in getTodosTrue" :key="item.id">
        <span>{{item.id}}</span>
        <span>{{item.done}}</span>
        <span>{{item.text}}</span>
      </li>
    </ul>

    <h2>2.3、mapGetters/todo is false</h2>
    <li v-for="item in getTodosFalse" :key="item.id">
      <span>{{item.id}}</span>
      <span>{{item.done}}</span>
      <span>{{item.text}}</span>
    </li>

    <h1>3、mutation/mapMutations demo</h1>
    <h2>3.1、mutation</h2>
    <button @click="update">更新地址</button>

    <h2>3.2、mapMutations</h2>
    <button @click="increate">增加</button>
    <button @click="decrease">减少</button>
    <button @click="updateName({'name': 'hello '})">修正名字</button>
    <button @click="updateAddress({'address': 'jiangxi '})">修正地址</button>
    <h3>{{address}}</h3>
    <h3>{{name}}</h3>

    <h1>4、actions/mapActions demo</h1>
    <h2>4.1、actions</h2>

    <h2>4.2、mapActions</h2>
    <button @click="Aincreate">增加</button>
    <button @click="Adecrease">减少</button>
    <h3>{{count}}</h3>




    <button @click="Sincreate">strict模式</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    name: "Product",
    computed: {
      ...mapState([
        'count',
        'name',
        'address'
      ]),
      ...mapGetters([
        'getTodosTrue',
        'getTodosFalse'
      ]),
    },
    methods: {
      ...mapActions([
        'Aincreate',
        'Adecrease',
      ]),
      ...mapMutations([
        'increate',
        'decrease',
        'updateName',
        'updateAddress'
      ]),
      update() {
        this.$store.commit('updateAddress', {'address': 'jiangxi '})
      },
      Sincreate() {
        this.$store.state.count++
      }
    },
  }
</script>

<style>

</style>
