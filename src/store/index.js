import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import nav from './modules/nav'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    permission,
    nav
  },
  getters
})

export default store
