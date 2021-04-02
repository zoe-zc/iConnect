import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    screenWidth: document.documentElement.clientWidth,
    screenHeight: document.documentElement.clientHeight
  },
  mutations: {
    setWidth (state, value) {
      state.screenWidth = value
      console.log(this.state)
    },
    setHeight (state, value) {
      state.screenHeight = value
    }

  },
  actions: {

  },
  getters:{

  }
})