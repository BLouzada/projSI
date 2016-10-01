angular.module('DicasXadrez').controller('ChessGameController', ['$scope', "$timeout", function($scope, $timeout){
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

$timeout(function () {
	var board,
  statusEl = $('#status'),
  fenEl = $('#fen'),
  pgnEl = $('#pgn');
  game = new Chess();

var onDragStart = function(source, piece, position, orientation) {
  removeGreySquares();
  if (game.game_over() === true ){
    return false;
  }
};
var onDrop = function(source, target, draggedPiece) {
  // see if the move is legal
  var moves = game.moves({
    square: source,
    verbose: true
  });

  var move = game.move({
    from: source,
    to: target,
    verbose: true,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) {
    for (var i = 0; i < moves.length; i++) {
    greySquare(moves[i].to);
  }

	return 'snapback';
  }

  updateStatus();
};

// update the board position after the piece snap
// for castling, en passant, pawn promotion
var onSnapEnd = function() {
  board.position(game.fen());
};

var updateStatus = function() {
  var status = '';

  var moveColor = 'White';
  if (game.turn() === 'b') {
    moveColor = 'Black';
  }

  // checkmate?
  if (game.in_checkmate() === true) {
    status = 'Game over, ' + moveColor + ' is in checkmate.';
  }

  // draw?
  else if (game.in_draw() === true) {
    status = 'Game over, drawn position';
  }

  // game still on
  else {
    status = moveColor + ' to move';

    // check?
    if (game.in_check() === true) {
      status += ', ' + moveColor + ' is in check';
    }
  }

  statusEl.html(status);
  fenEl.html(game.fen());
  pgnEl.html(game.pgn());
};

var cfg = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
};
board = ChessBoard('board', cfg);


updateStatus();
},1);
}]);

