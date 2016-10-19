angular.module('DicasXadrez').directive('empateXadrez', function () {
    return {
      restrict: 'E',
      template: '<ul class="button-group small">\
                    <li><button ng-click="olaMundo()">Button X</button></li>\
                    <li><a href="#">Button Y</a></li>\
                    <li><a href="#">Button Z</a></li>\
                </ul>\
                <div id="board" style="width: 400px"></div>',
      controller: 'ChessDrawController',
    };
});
