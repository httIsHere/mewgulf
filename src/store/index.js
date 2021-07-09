import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cur_tab: 'Home'
  },
  mutations: {
    triggerTab(state, payload) {
      return state.cur_tab = payload
    }
  },
  actions: {
    triggerTab(cxt, payload) {
      cxt.commit('triggerTab', payload)
    }
  },
  modules: {
  },
  getters: {
    getterCurTab(state) {
      return state.cur_tab
    }
  }
})
