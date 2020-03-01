import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// https://www.cnblogs.com/m2maomao/p/9954640.html
//一个store  , Vuex.store的 实例
const store = new Vuex.Store({
  state: {
    count : 1,
    name: 'psw',
    address: 'zhangshu',
  },
  getters:{            //  Getter相当于vue中的computed计算属性
    getStateCount: function(state) {
      return state.count + 1;
    }
  },
  mutations: {
    addition(state) {
      state.count = state.count + 1;
    },
    reduction(state) {
      state.count = state.count - 1;
    }
  },
  actions: {      //注册actions，类似vue里面的methods
    //通过这个修改state里面的值
    // 可以直接用mutations修改，但是官方建议使用actions去调用mutations去修改
    addition(context) {
      context.commit("addition");
    },
    reduction(context){
      context.commit("reduction");
    }
  }
})

export default store
