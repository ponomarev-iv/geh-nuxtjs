import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const state = () => ({
  filialActive: null,
  lang: 0
});

export const mutations = {
  SET_FILIAL (state, data) {
    state.filialActive = data
  },
  SET_LANG (state, data) {
    state.lang = data
  }
};
