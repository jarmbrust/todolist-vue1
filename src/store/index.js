import Vue from 'vue'
import Vuex from 'vuex'
import TodoData from './todo-data'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TodoData
  }
})
