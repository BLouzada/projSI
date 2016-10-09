angular.module('DicasXadrez', ['foundation','ui.router','ngAnimate','foundation.dynamicRouting','foundation.dynamicRouting.animations'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('menu-categorias', {
				url: '/menu-categorias',
				templateUrl: 'assets/partials/menu-categorias.html'
			})
			.state('novatos', {
				url: '/novatos',
				templateUrl: 'assets/partials/novatos/novatos.html'
			})
			.state('novatos.sobre', {
				parent: 'novatos',
				url: '/sobre',
				templateUrl: 'assets/partials/novatos/xadrez.html'
			})
			.state('novatos.rei', {
				url:'/rei',
				templateUrl: 'assets/partials/novatos/rei.html'
			})
			.state('novatos.rainha', {
				url: '/rainha',
				templateUrl: 'assets/partials/novatos/rainha.html'
			})
			.state('novatos.peao', {
				url: '/peao',
				templateUrl: 'assets/partials/novatos/peao.html'
			})
			.state('novatos.torre', {
				url: '/torre',
				templateUrl: 'assets/partials/novatos/torre.html'
			})
			.state('novatos.cavalo', {
				url: '/cavalo',
				templateUrl: 'assets/partials/novatos/cavalo.html'
			})
			.state('novatos.bispo', {
				url: '/bispo',
				templateUrl: 'assets/partials/novatos/bispo.html'
			})
			.state('novatos.exercicio', {
				url: '/exercicio',
				templateUrl: 'assets/partials/novatos/exercicio.html',
				controller: 'ChessGameController'
			});
	});


angular.module('DicasXadrez').controller('ChessGameController', ['$scope', "$timeout", function($scope, $timeout){
    /*
  statusEl = $('#status'),
  fenEl = $('#fen'),
  pgnEl = $('#pgn');
  */
  var board,
  game = new Chess();

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
  window.setTimeout(makeRandomMove, 250);
  updateStatus();
  };

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

    /*statusEl.html(status);
    fenEl.html(game.fen());
    pgnEl.html(game.pgn());
    */
  };
  var makeRandomMove = function() {
    var possibleMoves = game.moves();

    // game over
    if (possibleMoves.length === 0) return;

    var randomIndex = Math.floor(Math.random() * possibleMoves.length);
    game.move(possibleMoves[randomIndex]);
    board.position(game.fen());
  };


  var cfg = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,
    onSnapEnd: onSnapEnd
  };

  $timeout(function () {
    board = ChessBoard('board', cfg);
    updateStatus();
  },1);
}]);


angular.module('DicasXadrez').directive('menuNovatos', function () {
    return {
        templateUrl: 'assets/partials/novatos/menu-novatos.html'
    };
});
