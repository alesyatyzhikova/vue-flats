import axios from 'axios'

const state = {
  flats: []
}

const getters = {
  allFlats: state => state.flats
}

const mutations = {
  setFlats: (state, flats) => state.flats = flats
}

const actions = {
  async getFlats({ commit }) {
    const { data } = await axios.get('http://localhost:3000/response');

    commit('setFlats', data);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}