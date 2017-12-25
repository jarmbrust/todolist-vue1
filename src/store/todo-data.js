const state = {
  todoList: []
}

const mutations = {
  'SET_TODO_ITEM' (state, payload) {
    state.todoList.add(payload.listItem)
  }
}

const actions = {
  addItem: ({commit}, payload) => {
    commit('SET_TODO_ITEM', payload)
  }
}

const getters = {
  todoList: state => {
    return state.todoList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
