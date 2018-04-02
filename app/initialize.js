import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vueify/lib/insert-css';

// VueGoogleMaps has some weird problems with modules, so we require these ourselves
import 'lodash/mapValues';
import 'lodash/forEach';
import 'lodash/forIn';
import 'lodash/clone';
import 'lodash/omit';
import 'lodash/pickBy';
const VueGoogleMaps = require('vue2-google-maps');

import GoogleMap from './map.vue';

Vue.use(Vuetify);
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyD9rXZnJ5vqpqOZ_HKc6qXnVEaKOuYKz-I',
  },
  installComponents: true
});

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
      el: '#google-map',
      components: { GoogleMap },
  });
  console.log('Initialized app');
});
