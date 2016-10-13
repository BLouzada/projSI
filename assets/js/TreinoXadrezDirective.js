angular.module('DicasXadrez').directive('treinoXadrez', function () {
    return {
      restrict: 'A',
      templateUrl: 'assets/partials/novatos/treino-xadrez.html',
      controller: 'ChessGameController',
    };
});
