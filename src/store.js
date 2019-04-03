import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    getTodos: (state) => state.todos
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newToto: (state, todo) => (state.todos.unshift(todo))
  },
  actions: {
    async fetData({ commit }) {
      const response = await axios.get(
        'http://5c13e583a5e15f001345f63b.mockapi.io/api/listTodo/demo'
      );
      commit('setTodos',response.data);
    },

    async addTodo({ commit }, title) {
      const response = await axios.post(
        'http://5c13e583a5e15f001345f63b.mockapi.io/api/listTodo/demo',
        { title, completed: false }
      )
      commit('newToto', response.data);
    }
  }
})
