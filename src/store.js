import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    item: [
    {
      id: 1,
      name: "item1"
    },
    {
      id: 2,
      name: "item2"
    }
  ]
  },
  getters: {
    getItem: (state) => state.item
  },
  mutations: {

  },
  actions: {

  }
})
