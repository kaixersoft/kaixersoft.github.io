

module.exports = function(grunt) {

  // Target HTML to inject updates
  var targetHTML = grunt.option('html') || 'index';
  
  // Load all grunt-* from package.json
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  // Initialize grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*      
      Watches for any changes in CSS and Javascript
     */
    watch: {
      options: {
        cwd: 'www/',
        spawn: false, // Important, don't remove this!
        event: ['changed', 'added', 'deleted']
      },
      css: {
        files: ['css/*.css'],
        tasks: ['injector']
      },
      js: {
        files: [  
                  'Gruntfile.js',                  
                  'js/*.js'
                ],
        tasks: ['injector']
      },
      html: {
        files: ['www/*.html'],
        tasks: ['browserSync']
      }

    },
    /*
      Serve application and inject updated files
     */
    browserSync: {
      files: [
            "www/css/*.css",
            "www/js/*.js",
            "www/images/*.{png,jpg,jpeg,gif,ico,svg}"
            ],     
      options: {
        watchTask: true,
        injectChanges: true,
        server: "www/"
      },

    },

    /*
      Inject custom Javascript and Style sheets
    */
    injector: {
      options: {
        relative:true,
        template :'www/'+targetHTML+'.html',
        destFile: 'www/'+targetHTML+'.html'
      },
      files: ['www/js/*.js', 'www/css/*.css']

    },



    /*
      Inject library dependencies
    */
    wiredep: {

      task: {
        // Point to the files that should be updated when
        // you run `grunt wiredep`
        src: [
          'www/**/*.html',
        ],
        options: {
          // https://github.com/taptapship/wiredep#configuration
        }
      }
    },    


    // Add new config here..    
  });  


  // $> grunt serve --html=index
  grunt.registerTask('serve', [ 'wiredep', 'injector', 'browserSync', 'watch' ]);

};