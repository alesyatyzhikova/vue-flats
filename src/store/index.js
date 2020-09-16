import Vue from 'vue'
import Vuex from 'vuex'

import flats from './modules/flats'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    flats
  }
})