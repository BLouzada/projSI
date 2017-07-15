angular.module('DicasXadrez').controller('ChessGameController', ['$scope', "$timeout", "game", function($scope, $timeout, game){

  statusEl = $('#gameStatus');

  var board;
  var game = game;
  var greySquare = function(square) {
    var squareEl = $('#board .square-' + square);
    var background = '#a9a9a9';
      if (squareEl.hasClass('black-3c85d') === true) {
        background = '#696969';
      }
    squareEl.css('background', background);
  };

  var onDragStart = function(source, piece, position, orientation) {
    removeGreySquares();
    if (game.game_over() === true ){
      return false;
    }
  };

  var removeGreySquares = function() {
    $('#board .square-55d63').css('background', '');
  };

  var onDrop = function(source, target, draggedPiece) {
    var move = game.move({
      from: source,
      to: target,
      verbose: true,
      promotion: 'q'
    });

    var moves = game.moves({
      square: source,
      verbose: true
    });

    if (move === null) {
      for (var i = 0; i < moves.length; i++) {
        greySquare(moves[i].to);
      }
      return 'snapback';
    }
    updateStatus();
    $timeout(function () {
      makeRandomMove();
    },1000);
  };

  var onSnapEnd = function() {
    board.position(game.fen());
  };

  var updateStatus = function() {
    var status = '';

    var moveColor = 'Brancas';
    if (game.turn() === 'b') {
      moveColor = 'Pretas';
    }

    if (game.in_checkmate() === true) {
      status = 'Fim de jogo, ' + moveColor + ' esta em check-mate.';
    }

    else if (game.in_draw() === true) {
      status = 'Fim de jogo, posição de empate';
    }

    else {
      status = moveColor + ' a jogar';

      if (game.in_check() === true) {
        status += ', ' + moveColor + ' esta em check';
      }
    }

    statusEl.html(status);
  };

  var makeRandomMove = function() {
    var possibleMoves = game.moves();

    if (possibleMoves.length === 0) return;

    var randomIndex = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIndex]);
    board.position(game.fen());
    updateStatus();
  };

  var cfg = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    moveSpeed: 'slow',
    onSnapEnd: onSnapEnd
  };

  $timeout(function () {
    board = ChessBoard('board', cfg);
    updateStatus();
  },1);
}]);

