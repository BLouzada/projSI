angular.module('DicasXadrez').directive('empateXadrez', function () {
    return {
      restrict: 'E',
      template: '<ul class="button-group small">\
                    <li><button ng-click="demoReiAfogado()">Rei Afogado</button></li>\
                    <li><button ng-click="demoXequePerpetuo()">Xeque Perpetuo</button></li>\
                </ul></br>\
                <span id="gameStatus" class="label"></span>\
                <div id="board" style="width: 464px"></div>',
      controller: 'ChessDrawController',
    };
});
