import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = () => ({
  filialActive: null
});

export const mutations = {
  SET_FILIAL (state, data) {
    state.filialActive = data
  }
};
