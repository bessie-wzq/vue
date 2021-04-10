import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:false
  },
  mutations: {
    loginSuccess(state){
      state.islogin = true
    }
  },
  actions: {
  },
  modules: {
  }
})
