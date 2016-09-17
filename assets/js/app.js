angular.module('DicasXadrez', ['foundation','ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('menu-categorias', {
				url: '/menu-categorias',
				templateUrl: 'assets/partials/menu-categorias.html'
			})
			.state('novatos', {
				url: '/novatos',
				templateUrl: 'assets/partials/sobre-xadrez.html'
			});
	})
