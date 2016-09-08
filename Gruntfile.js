module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({        
		concat: {
			css:{
				src:['bower_components/foundation-apps/dist/css/foundation-apps.css',
					 'bower_components/font-awesome/css/font-awesome.css'],				
				dest: 'app.css'				
			},
			js: {			
					"src": ['bower_components/jquery/dist/jquery.js',														
							'bower_components/angular/angular.js',							
							'bower_components/angular-ui-router/release/angular-ui-router.js',
							'bower_components/foundation-apps/dist/js/foundation-apps.js'
							] ,
					"dest": 'vendor.js'			
			},
			app:{
				src:['app.js',
					 'assets/js/**.js'
					 ],					 
				dest: 'app.js'				
			},
		}
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definitions
    grunt.registerTask('default', ['concat:css', 'concat:js', 'concat:app']);
};