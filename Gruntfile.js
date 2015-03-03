module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: [
          "include/util.js",
          "include/webutil.js",
          "include/base64.js",
          "include/websock.js",
          "include/des.js",
          "include/keysymdef.js",
          "include/keyboard.js",
          "include/input.js",
          "include/display.js",
          "include/jsunzip.js",
          "include/rfb.js",
          "include/keysym.js"
        ],
        dest: 'dist/novnc.js',
      }
    },
    uglify: {
      options: {
        compress: false,
        preserveComments: true
      },
      my_target: {
        files: {
          'dist/novnc.min.js': [ 'dist/novnc.js' ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

 grunt.registerTask('default', [ 'concat', 'uglify' ]);
};
