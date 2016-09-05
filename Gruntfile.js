module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({        
		concat: {
			css:{
				src:'css/*.css',
				dest: 'app.css'				
			},
			js: {			
					"src":  'bower_components/**/*.js',
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