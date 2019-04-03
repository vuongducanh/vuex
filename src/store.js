import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { async } from 'q';

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
    newToto: (state, todo) => (state.todos.unshift(todo)),
    removeTodo: (state, id) => state.todos = state.todos.filter((el) => el.id != id),
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
        { title }
      )
      commit('newToto', response.data);
    },

    async deleteToDo({ commit }, id) {
      await axios.delete(`http://5c13e583a5e15f001345f63b.mockapi.io/api/listTodo/demo/${id}`);

      commit('removeTodo', id)
    }
  }
})
