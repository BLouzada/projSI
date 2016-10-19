angular.module('DicasXadrez').directive('treinoXadrez', function () {
    return {
      restrict: 'E',
      template: '<span id="gameStatus" class="label"></span>\
                <div id="board" style="width: 400px"></div>',
      controller: 'ChessDrawController',
    };
});
