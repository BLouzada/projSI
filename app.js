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
	
angular.module('DicasXadrez').controller('TesteController',['$scope',function($scope){		
		$scope.name = "Super";
		$scope.lastName = "Hero";
		
	}]);
