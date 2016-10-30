angular.module('DicasXadrez').controller('ChessTaticsController', ['$scope', "$timeout","$element", function($scope, $timeout,$element){
  statusEl = $('#gameStatus');
  statusEl.html('Demonstração das táticas básicas.');
  var i = 0;

  var greySquare = function(square) {
    var squareEl = $('#board .square-' + square);
    var background = '#a9a9a9';
      if (squareEl.hasClass('black-3c85d') === true) {
        background = '#696969';
      }
    squareEl.css('background', background);
  };

  var removeGreySquares = function() {
    $('#board .square-55d63').css('background', '');
  };

  $scope.demoGarfos = function (){
    removeGreySquares();
    statusEl.html('Pretas a jogar.');
    board.position('r1bqkb1r/ppp2Npp/2np1n2/4p3/2B1P3/8/PPPP1PPP/RNBQK2R');
    greySquare('d8');
    greySquare('h8');
    greySquare('d5');
    greySquare('e6');
    greySquare('f7');
  };

  $scope.demoPregadura = function (){
    removeGreySquares();
    statusEl.html('Pretas a jogar.');
    board.position('r2qkbnr/ppp1pppp/2np4/1B6/4P1b1/5N2/PPPP1PPP/RNBQK2R');
    greySquare('c6');
    greySquare('d7');
    greySquare('e8');
  };
  $scope.demoEspetos = function (){
    removeGreySquares();
    statusEl.html('Pretas a jogar.');
    board.position('1Q2k2r/6pp/8/2q5/8/7P/6P1/7K');
    greySquare('e8');
    greySquare('h8');
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

