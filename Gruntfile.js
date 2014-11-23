/* global require, module */

'use strict';

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    dirs: {
      src: 'src',
      dist: 'dist',
      demo: 'demo',
      tmpl: 'template'
    },

    meta: {
      banner: '/**\n' +
      ' * <%= pkg.description %>\n' +
      ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
      ' * @link <%= pkg.homepage %>\n' +
      ' * @author <%= pkg.author.name %>\n' +
      ' * @license CC BY 4.0 License,http://creativecommons.org/licenses/by/4.0/\n' +
      ' */\n'
    },

    //
    // Configuring grunt helpers
    //

    clean: ['<%= dirs.dist %>'],

    concat: {  // grunt-contrib-concat
      options: {
        banner: '<%= meta.banner %>'
      },
      js: {
        src: ['<%= dirs.src %>/*.js', '<%= dirs.tmpl %>/cache.js'],
        dest: '<%= dirs.dist %>/<%= pkg.name %>.js'
      },
      css: {
        src: ['<%= dirs.src %>/*.css'],
        dest: '<%= dirs.dist %>/<%= pkg.name %>.css'
      }
    },
    connect: {  // grunt-contrib-connect
      dev: {
        options: {
          port: 9999,
          hostname: '0.0.0.0',
          base: '<%= dirs.dist %>',
          keepalive: true
        }
      }
    },

    cssmin: {  // grunt-contrib-cssmin
      combine: {
        files: {
          '<%= dirs.dist %>/<%= pkg.name %>.min.css': ['<%= dirs.dist %>/<%= pkg.name %>.css']
        }
      }
    },

    jshint: {  // grunt-contrib-jshint
      all: [
        'Gruntfile.js',
        '<%= dirs.src %>/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    ngmin: {  // grunt-ngmin
      dist: {
        files: [{
          expand: true,
          cwd: '<%= dirs.dist %>',
          src: '*.js',
          dest: '<%= dirs.dist %>'
        }]
      }
    },

    ngtemplates: {  // grunt-angular-templates
      all: {
        src: '<%= dirs.tmpl %>/**.tmpl',
        dest: '<%= dirs.tmpl %>/cache.js',
        options: {
          htmlmin: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
          },
          module: 'spicklist.html',
          standalone: true
        }
      }
    },

    open: {  // grunt-open
      demo: {
        path: 'http://localhost:9999/'
      }
    },

    release: {  // grunt-release
      options: {
        file: 'bower.json',
        npm: false
      }
    },

    uglify: {  // grunt-contrib-uglify
      options: {
        banner: '<%= meta.banner %>',
        mangle:true,
        sourceMap: true
      },
      dist: {
        src: ['<%= dirs.dist %>/<%= pkg.name %>.js'],
        dest: '<%= dirs.dist %>/<%= pkg.name %>.min.js'
      }
    }
  });


  //
  // Grunt tasks.
  //

  // Default task.
  grunt.registerTask('default', [
    'clean',
    'build',
    'run'
  ]);

  // Test task.
  grunt.registerTask('test', [
    'jshint:all'
  ]);

  // Build task.
  grunt.registerTask('build', [
    'concat',
    'ngmin',
    'uglify',
    'cssmin'
  ]);
};
