import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

import spin from 'assets/spinner.svg'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: spin
})
