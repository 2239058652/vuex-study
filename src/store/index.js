import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // store 的数据只能通过mutation操作
  state: {
    count: 0
  },
  getters: {
    // gettter不会修改store中的数据，只会对已有数据加工处理形成新的数据，包装作用，类似计算属性
    // store的数据发生变化，getter的数据也会发生变化
    showNum (state) {
      return '当前最新的数量为【' + state.count + '】'
      // 使用getters，第一种： this.$store.getters.name
    }
  },
  mutations: {
    add (state) {
      // 不i要在mutation中执行异步操作，action专门处理异步任务
      // setTimeout(() => {
      //   state.count++
      // }, 1000)
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  // action处理异步操作，但要通过出发mutation中的方式来实现,
  // 不能直接修改state，只有mutation中的函数才有权力修改state
  actions: {
    addAsync (context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000);
    },
    addNAsync (context, step) {
      setTimeout(() => context.commit('addN', step), 1000);
    }
  },
  modules: {
  }
})
