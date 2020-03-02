import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 监听调用mutation中type为increate函数，调用成功就触发如下操作
const myPlugin = store => {
  // mutation 的格式为：{ type, payload }，通过这个对象可以判断是哪一个 mutation 被调用了，额外的参数是什么。
  store.subscribe((mutation, state) => {
      if (mutation.type === 'increate') {
          console.log(mutation)
          console.log(state)
      }
  })
}

// https://www.cnblogs.com/m2maomao/p/9954640.html
//一个store  , Vuex.store的 实例
const store = new Vuex.Store({
  state: {
    count : 1,
    name: 'psw',
    address: 'zhangshu',
    todos: [
      {id: 1, done: true, text: '我是码农'},
      {id: 2, done: false, text: '我是码农201号'},
      {id: 3, done: true, text: '我是码农202号'}
    ]
  },
  getters:{            //  Getter相当于vue中的computed计算属性
    getTodosTrue: (state) => {
      return state.todos.filter(item => item.done === true)
    },
    getTodosFalse: (state) => {
      return state.todos.filter(item => item.done === false)
    }
  },
  mutations: {
    increate(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
    updateName(state, payload) {
      state.name = payload.name + state.name  
    },
    updateAddress(state, payload) {
      state.address = payload.address + state.address  
    }
    // store.commit({
    //   type: 'increment',
    //   amount: 10
    // })
  },
  /**
   * commit 和 dispatch的区别
   * https://shq5785.blog.csdn.net/article/details/100763161
   */
  actions: {      //注册actions，类似vue里面的methods
    //通过这个修改state里面的值
    // 可以直接用mutations修改，但是官方建议使用actions去调用mutations去修改
    Aincreate({ commit }) {
      // setTimeout(() => {
      //   commit("increate");
      // }, 1000000)
      commit("increate");//同步操作，数据提交至 mutations ，可用于登录成功后读取用户信息写到缓存里
    },
    Adecrease({dispatch}) {
      setTimeout(() => {
        dispatch({type: "Aincreate"});// 数据提交至 actions ，可用于向后台提交数据
      }, 2000)
    },
  },
  plugins: [myPlugin],
  strict: true  // 不允许在mutations之外修改state中的值
})


export default store
