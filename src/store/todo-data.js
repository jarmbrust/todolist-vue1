const state = {
  todoList: []
}

const mutations = {
  'SET_TODO_ITEM' (state, payload) {
    state.todoList.push(payload.item)
  },
  'REMOVE_TODO_ITEM' (state, payload) {
    console.log('in mutation, state, payload', state, payload)
    const index = state.todoList.indexOf(payload.item)
    if (index > -1) {
      state.todoList.splice(index, 1)
    }
  }
}

const actions = {
  addItem: ({commit}, payload) => {
    console.log('payload', payload)
    commit('SET_TODO_ITEM', payload)
  },
  removeItem: ({commit}, payload) => {
    commit('REMOVE_TODO_ITEM', payload)
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
