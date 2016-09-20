module.exports = function(grunt) {

require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

grunt.initConfig({
	concat: {
			css:{
				src:['bower_components/foundation-apps/dist/css/foundation-apps.css',
					 'assets/css/chessboard-0.3.0.css'],
						
				dest: 'vendor.css'				
				},
			js: {			
				src: ['bower_components/jquery/dist/jquery.js',
					  'bower_components/angular/angular.js',							
					  'bower_components/angular-ui-router/release/angular-ui-router.js',
					  'bower_components/foundation-apps/dist/js/foundation-apps.js',
					  'assets/js/chessboard-0.3.0.js',
					  'node_modules/chess.js/chess.js'
					 ] ,
				dest: 'vendor.js'			
				},
			app:{
				src:['assets/js/DicasXadrez.js',
					 'assets/js/ChessGameController.js',				 
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