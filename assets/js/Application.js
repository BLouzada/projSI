angular.module('DicasXadrez', ['foundation','ngRoute'])	
	.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "index.html"
			})
			.when("/novato", {
				templateUrl : "novato.html"
			})
	})