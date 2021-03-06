angular.module('DicasXadrez', ['foundation','ui.router','ngAnimate','foundation.dynamicRouting','foundation.dynamicRouting.animations'])
	.value('game', game = new Chess())
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
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
				templateUrl: 'assets/partials/novatos/sobre-xadrez.html'
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
				abstract: true,
				url: '/iniciantes',
				template: '<ui-view/>'
			})
			.state('iniciantes.empates', {
				parent: 'iniciantes',
				url: '/empates',
				templateUrl: 'assets/partials/iniciantes/empates.html'
			})
			.state('iniciantes.jogadas-avancadas', {
				parent: 'iniciantes',
				url: '/jogadas-avancadas',
				templateUrl: 'assets/partials/iniciantes/jogadas-avancadas.html'
			})
			.state('iniciantes.abertura', {
				parent: 'iniciantes',
				url: '/abertura',
				templateUrl: 'assets/partials/iniciantes/abertura.html'
			})
			.state('iniciantes.meio-partida', {
				parent: 'iniciantes',
				url: '/meio-partida',
				templateUrl: 'assets/partials/iniciantes/meio-partida.html'
			})
			.state('iniciantes.fim-partida', {
				parent: 'iniciantes',
				url: '/fim-partida',
				templateUrl: 'assets/partials/iniciantes/fim-partida.html'
			})
			.state('taticas', {
				abstract: true,
				url: '/taticas',
				template: '<ui-view/>'
			})
			.state('taticas.sobre', {
				parent: 'taticas',
				url: '/sobre',
				templateUrl: 'assets/partials/taticas/sobre.html'
			});
	});

