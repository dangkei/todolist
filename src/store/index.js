import { createStore } from 'vuex'

export default createStore({
  // 定义状态
  state: {
    list: [
      {
        title: '吃饭',
        complete: false
      },
      {
        title: '睡觉',
        complete: false
      },
      {
        title: '学习',
        complete: false
      },
      {
        title: '练功',
        complete: false
      }, {
        title: '敲代码',
        complete: true
      }
    ]
  },
  getters: {},
  // 同步修改state，都是方法
  // 第一个参数是state,第二个参数是要修改的值
  mutations: {
    // 添加任务
    addTodo (state, payload) {
      state.list.push(payload)
    },
    // 删除任务
    delTodo (state, payload) {
      state.list.splice(payload, 1)
    },
    // 清除已完成
    clearAll (state, payload) {
      state.list = payload
    }
  },
  // 异步提交mutations
  // 第一个参数是store， 第二个参数是需要修改的值
  actions: {
    asyncSetName (store, params) {
      setTimeout(() => {
        // 提交mutations
        store.comment('setName', params)
      }, 2000)
    }
  },
  // 模块化
  modules: {}
})
