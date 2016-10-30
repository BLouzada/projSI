angular.module('DicasXadrez').controller('ChessAdvancedController', ['$scope', "$timeout", function($scope, $timeout){

  var board;
  var cfg = {
    position: 'clear',
    moveSpeed: 'slow'
  };

  $timeout(function () {
    board = ChessBoard('board', cfg);
  },1);

  statusEl = $('#gameStatus');
  statusEl.html('Demonstração das jogadas avançadas.');

  $scope.demoRoque = function (){
    var i = 0;
    statusEl.html('Demonstração roque.');
    board.start();
    $timeout(function () {
        board.move('e2-e4');
      },i+=1000);
    $timeout(function () {
        board.move('g7-g6');
      },i+=1000);
    $timeout(function () {
        board.move('d2-d4');
      },i+=1000);
    $timeout(function () {
        board.move('d2-d4');
      },i+=1000);
    $timeout(function () {
        board.move('f8-g7');
      },i+=1000);
    $timeout(function () {
        board.move('c1-e3');
      },i+=1000);
    $timeout(function () {
        board.move('g8-h6');
      },i+=1000);
    $timeout(function () {
        board.move('b1-c3');
      },i+=1000);
    $timeout(function () {
        board.move('d7-d6');
      },i+=1000);
    $timeout(function () {
        board.move('d1-d2');
      },i+=1000);
    $timeout(function () {
        board.move('e8-h8');
        board.position('rnbqr2k/ppp1ppbp/3p2pn/8/3PP3/2N1B3/PPPQ1PPP/R3KBNR',false);
      },i+=1000);
     $timeout(function () {
        board.move('e1-a1');
        board.position('rnbqr2k/ppp1ppbp/3p2pn/8/3PP3/2N1B3/PPPQ1PPP/K3RBNR',false);
      },i+=1000);
  };

  $scope.demoEnPassant = function (){
    var i = 0;
    board.start();

     $timeout(function () {
        board.move('e2-e4');
      },i+=1000);
     $timeout(function () {
        board.move('a7-a6');
      },i+=1000);
     $timeout(function () {
        board.move('e4-e5');
      },i+=1000);
     $timeout(function () {
        board.move('d7-d5');
      },i+=1000);
     $timeout(function () {
        board.move('e5-d6');
        board.position('rnbqkbnr/1pp1pppp/p2P4/8/8/8/PPPP1PPP/RNBQKBNR',false);
      },i+=1000);
  };


}]);

