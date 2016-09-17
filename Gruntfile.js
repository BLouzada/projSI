module.exports = function(grunt) {

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.initConfig({
	concat: {
			css:{
				src:'bower_components/foundation-apps/dist/css/foundation-apps.css',
				dest: 'assets/vendor/vendor.css'				
				},
			js: {			
				src: ['bower_components/jquery/dist/jquery.js',
					  'bower_components/angular/angular.js',							
					  'bower_components/angular-ui-router/release/angular-ui-router.js',
					  'bower_components/foundation-apps/dist/js/foundation-apps.js'
					 ] ,
				dest: 'assets/vendor/vendor.js'			
				},
			app:{
				src:['app.js',
					 'assets/js/**.js'
					 ],					 
				dest: 'app.js'				
				},
			},
	 watch: {
		options: {
		  livereload: true,
		},
		js: {
		  files: ['assets/js/**.js'],
		  tasks: ['concat:app'],
		},
		css: {
		  files: ['assets/css/**.css'],
		  tasks: ['concat:css'],
		},
		files: ['assets/partials/**','index.html'],
	  },
})
;}