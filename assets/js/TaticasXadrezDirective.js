angular.module('DicasXadrez').directive('taticasXadrez', function () {
    return {
      restrict: 'E',
      template: '<ul class="button-group small">\
                    <li><button ng-click="demoGarfos()">Garfos</button></li>\
                    <li><button ng-click="demoPregadura()">Pregaduras</button></li>\
                    <li><button ng-click="demoEspetos()">Espetos</button></li>\
                </ul></br>\
                <span id="gameStatus" class="label"></span>\
                <div id="board" style="width: 464px"></div>',
      controller: 'ChessTaticsController',
    };
});
