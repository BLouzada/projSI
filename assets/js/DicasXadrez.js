angular.module('DicasXadrez', ['foundation','ui.router','ngAnimate','foundation.dynamicRouting','foundation.dynamicRouting.animations'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('/', {
				url: '/',
				templateUrl: 'index.html'
			})
			.state('menu-categorias', {
				url: '/menu-categorias',
				templateUrl: 'assets/partials/menu-categorias.html'
			})
			.state('novatos', {
				url: '/novatos',
				templateUrl: 'assets/partials/novatos/novatos.html'
			})
			.state('novatos.sobre', {
				parent: 'novatos',
				url: '/sobre',
				templateUrl: 'assets/partials/novatos/xadrez.html'
			})
			.state('novatos.rei', {
				parent: 'novatos',
				url:'/rei',
				templateUrl: 'assets/partials/novatos/rei.html'
			})
			.state('novatos.rainha', {
				parent: 'novatos',
				url: '/rainha',
				templateUrl: 'assets/partials/novatos/rainha.html'
			})
			.state('novatos.peao', {
				parent: 'novatos',
				url: '/peao',
				templateUrl: 'assets/partials/novatos/peao.html'
			})
			.state('novatos.torre', {
				parent: 'novatos',
				url: '/torre',
				templateUrl: 'assets/partials/novatos/torre.html'
			})
			.state('novatos.cavalo', {
				parent: 'novatos',
				url: '/cavalo',
				templateUrl: 'assets/partials/novatos/cavalo.html'
			})
			.state('novatos.bispo', {
				parent: 'novatos',
				url: '/bispo',
				templateUrl: 'assets/partials/novatos/bispo.html'
			})
			.state('novatos.treino', {
				parent: 'novatos',
				url: '/treino',
				templateUrl: 'assets/partials/novatos/treino.html'
			})
			.state('iniciantes', {
				url: '/iniciantes',
				templateUrl: 'assets/partials/iniciantes/iniciantes.html'
			})
			.state('iniciantes.sobre', {
				parent: 'iniciantes',
				url: '/sobre',
				templateUrl: 'assets/partials/iniciantes/iniciantes.html'
			});
	});

