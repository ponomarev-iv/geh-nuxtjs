import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD1ZYUn80SeDqhcygkcA7B-3_KeiRMojsk',
    region: 'RU',
    language: 'ru'
  }
})
