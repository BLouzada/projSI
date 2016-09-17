angular.module('DicasXadrez', ['foundation','ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('menu-categorias', {
				url: '/menu-categorias',
				templateUrl: 'assets/partials/menu-categorias.html',
				ncyBreadcrumb: {
                        label: 'Menu Categorias'
                }
			})
			.state('novatos', {
				url: '/novatos',
				templateUrl: 'assets/partials/novatos.html',
				ncyBreadcrumb: {
                        label: 'Novatos',
                        parent: 'Menu Categorias'
                    }
			});
	})
