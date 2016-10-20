angular.module('DicasXadrez').controller('ChessDrawController', ['$scope', "$timeout", function($scope, $timeout){
  statusEl = $('#gameStatus');

  $scope.demoReiAfogado = function (){
    board.position('7k/5K2/8/6Q1/8/8/8/8');
    board.move('g5-g6');
    statusEl.html('fim de jogo posição de empate');
  };

  $scope.demoXequePerpetuo = function (){
    board.position('6k1/6p1/8/6KQ/1r6/q2b4/8/8');

     $timeout(function () {
        statusEl.html('Brancas a jogar');
        board.move('h5-e8');
      },1000);

     $timeout(function () {
      statusEl.html('Pretas a jogar');
      board.move('g8-h7');
      },2000);

     $timeout(function () {
        statusEl.html('Brancas a jogar');
        board.move('e8-h5');
      },3000);

     $timeout(function () {
        statusEl.html('Pretas a jogar');
        board.move('h7-g8');
      },4000);
     $timeout(function () {
        statusEl.html('fim de jogo posição de empate');
     },5000);
  };

  var board;

  var cfg = {
    position: 'clear',
    moveSpeed: 'slow'
  };

  $timeout(function () {
    board = ChessBoard('board', cfg);
  },1);
}]);

