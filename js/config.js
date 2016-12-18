// seajs 的简单配置
seajs.config({
  base: "./",
  plugins: ['shim'],
  alias: {
    'jquery': {
      src : 'bower_components/jquery/jquery.min.js',
      exports: 'jQuery'
    },
    'bs': {
      src: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
      deps: ['jquery']
    }

  },

})
