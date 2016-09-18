angular.module('DicasXadrez', ['foundation','ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('menu-categorias', {
				url: '/menu-categorias',
				templateUrl: 'assets/partials/menu-categorias.html'
			})
			.state('sobre-xadrez', {
				url: '/sobre-xadrez',
				templateUrl: 'assets/partials/sobre-xadrez.html'
			})
			.state('sobre-rei', {
				url: '/sobre-rei',
				templateUrl: 'assets/partials/sobre-rei.html'
			})
			.state('sobre-rainha', {
				url: '/sobre-rainha',
				templateUrl: 'assets/partials/sobre-rainha.html'
			})
			.state('sobre-peao', {
				url: '/sobre-peao',
				templateUrl: 'assets/partials/sobre-peao.html'
			})
			.state('sobre-torre', {
				url: '/sobre-torre',
				templateUrl: 'assets/partials/sobre-torre.html'
			})
			.state('sobre-cavalo', {
				url: '/sobre-cavalo',
				templateUrl: 'assets/partials/sobre-cavalo.html'
			})
			.state('sobre-bispo', {
				url: '/sobre-bispo',
				templateUrl: 'assets/partials/sobre-bispo.html'
			})
			.state('sobre-exercicio', {
				url: '/sobre-exercicio',
				templateUrl: 'assets/partials/sobre-exercicio.html',
				controller: 'ChessGameController'
			});
	});

