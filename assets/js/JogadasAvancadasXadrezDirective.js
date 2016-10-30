angular.module('DicasXadrez').directive('jogadasAvancadasXadrez', function () {
    return {
      restrict: 'E',
      template: '<ul class="button-group small">\
                    <li><button ng-click="demoRoque()">Roque</button></li>\
                    <li><button ng-click="demoEnPassant()">Captura en passant</button></li>\
                </ul></br>\
                <span id="gameStatus" class="label"></span>\
                <div id="board" style="width: 464px"></div>',
      controller: 'ChessAdvancedController',
    };
});
