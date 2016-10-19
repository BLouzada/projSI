angular.module('DicasXadrez').controller('ChessDrawController', ['$scope', "$timeout", function($scope, $timeout){

  $scope.olaMundo = function (){
    board.move('e2-e4');
  }

  var board;

  var cfg = {
    position: 'clear',
    moveSpeed: 'slow'
  };

  $timeout(function () {
    board = ChessBoard('board', cfg);
  },1);
}]);

