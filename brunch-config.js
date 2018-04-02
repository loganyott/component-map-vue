// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^node_modules/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: 'app.css'
  }
};

exports.plugins = {
  babel: {
    presets: ['latest'],
  },
};

exports.npm = {
  aliases: {
    'MarkerClusterer': 'marker-clusterer-plus',
    'vue': 'vue/dist/vue.common.js'
  },
  compilers: ['vue-brunch'],
  styles: {
    vuetify: ['dist/vuetify.min.css']
  }
};
