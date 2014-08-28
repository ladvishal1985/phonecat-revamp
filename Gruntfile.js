module.exports = function (grunt){
    //grunt.loadNmpTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.initConfig({
        //'meta':{
        //    'jsFilesForTesting':[
        //        'bower_components/jquery/jquery.js',
        //        'bower_components/angular/angular.js',
        //        'bower_components/angular-route/angular-route.js',
        //        'bower_components/angular-sanitize/angular-sanitize.js',
        //        'bower_components/angular-mocks/angular-mocks.js',
        //        'bower_components/restangular/dist/restangular.js',
        //        'bower_components/underscore/underscore.js',
        //        'bower_components/underscore/underscore.js',
        //        'test/**/*Spec.js'
        //    ]
        //},
        //'karma':{
        //    'development':{
        //        'configFile': 'karma.conf.js',
        //        'options':{
        //            'files':[
        //                '<%= meta.jsFilesForTesting %/>',
        //                'source/**/*.js'
        //            ]
        //        }
        //    }
        //},
        //grunt.registerTask('test', ['karma:development']);
        'minified': {
            'options': {
              'configFile': 'karma.conf.js',
              'files': [
                '<%= meta.jsFilesForTesting %>',
                'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js'
              ],
            }
        },
        'jshint': {
          'beforeconcat': ['scripts/**/*.js'],
        }
        'concat':{
            'dist':{
                'src':['scripts/**/*.js'],
                'dest':['dist/<%= pkg.namelower%>-<%= pkg.version %>.js']
            }
        }
        'uglify': {
              'options': {
                'mangle': false
               },
               'dist': {
                    'files': {
                      'dist/<%= pkg.namelower %>-<%= pkg.version %>.min.js': ['dist/<%= pkg.namelower %>-<%= pkg.version %>.js']
                    }
                }
        },
        
      }
        
                
    });
     grunt.registerTask('build',
    [
      'jshint',
      'karma:development',
      'concat',
      'karma:dist',
      'uglify'
      'karma:minified'    
    ]);
}