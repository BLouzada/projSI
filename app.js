angular.module('DicasXadrez', ['ui.bootstrap','ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
			.state('menu-categorias', {
				url: '/menu-categorias',
				templateUrl: 'assets/partials/menu-categorias.html'
			})
			.state('sobre-xadrez', {
				url: '/sobre-xadrez',
				templateUrl: 'assets/partials/sobre-xadrez.html'
			})
			.state('sobre-rei', {
				url: '/sobre-rei',
				templateUrl: 'assets/partials/sobre-rei.html'
			})
			.state('sobre-rainha', {
				url: '/sobre-rainha',
				templateUrl: 'assets/partials/sobre-rainha.html'
			})
			.state('sobre-peao', {
				url: '/sobre-peao',
				templateUrl: 'assets/partials/sobre-peao.html'
			})
			.state('sobre-torre', {
				url: '/sobre-torre',
				templateUrl: 'assets/partials/sobre-torre.html'
			})
			.state('sobre-cavalo', {
				url: '/sobre-cavalo',
				templateUrl: 'assets/partials/sobre-cavalo.html'
			})
			.state('sobre-bispo', {
				url: '/sobre-bispo',
				templateUrl: 'assets/partials/sobre-bispo.html'
			})
			.state('sobre-exercicio', {
				url: '/sobre-exercicio',
				templateUrl: 'assets/partials/sobre-exercicio.html',
				controller: 'ChessGameController'
			});
	});


angular.module('DicasXadrez').controller('ChessGameController', ['$scope', "$timeout", function($scope, $timeout){
$timeout(function () {
	var board,
  game = new Chess(),
  statusEl = $('#status'),
  fenEl = $('#fen'),
  pgnEl = $('#pgn');
// do not pick up pieces if the game is over
// only pick up pieces for the side to move
var onDragStart = function(source, piece, position, orientation) {
  if (game.game_over() === true ){
    return false;
  }
};

var onDrop = function(source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) {
	console.log('joga direito idiota');
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

