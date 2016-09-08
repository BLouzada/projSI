angular.module('DicasXadrez', ['foundation','ui.router'])	
	.config(function($stateProvider, $urlRouterProvider) {
		
		$stateProvider
			.state('menu-principal', {
				url: '/menu-principal',
				templateUrl: 'assets/partials/menu-principal.html'
			})
			.state('novato', {
				url: '/novato',
				templateUrl: 'assets/partials/novato.html'
			});
	})
	