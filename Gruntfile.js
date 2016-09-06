module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({        
		concat: {
			css:{
				src:['bower_components\foundation-sites\dist\foundation.css', 'css/**.css'],				
				dest: 'app.css'				
			},
			js: {			
					"src": ['bower_components/jquery/dist/jquery.js',
							'bower_components/foundation-sites/dist/foundation.js',
							'bower_components/foundation-sites/js/**.js','bower_components/angular/angular.js'] ,
					"dest": 'app.js'			
			}
		}
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definitions
    grunt.registerTask('default', ['concat:css', 'concat:js']);
};