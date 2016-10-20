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
				templateUrl: 'assets/partials/novatos/sobre-xadrez.html'
			})
			.state('novatos.rei', {
				parent: 'novatos',
				url:'/rei',
				templateUrl: 'assets/partials/novatos/rei.html'
			})
			.state('novatos.rainha', {
				parent: 'novatos',
				url: '/rainha',
				templateUrl: 'assets/partials/novatos/rainha.html'
			})
			.state('novatos.peao', {
				parent: 'novatos',
				url: '/peao',
				templateUrl: 'assets/partials/novatos/peao.html'
			})
			.state('novatos.torre', {
				parent: 'novatos',
				url: '/torre',
				templateUrl: 'assets/partials/novatos/torre.html'
			})
			.state('novatos.cavalo', {
				parent: 'novatos',
				url: '/cavalo',
				templateUrl: 'assets/partials/novatos/cavalo.html'
			})
			.state('novatos.bispo', {
				parent: 'novatos',
				url: '/bispo',
				templateUrl: 'assets/partials/novatos/bispo.html'
			})
			.state('novatos.treino', {
				parent: 'novatos',
				url: '/treino',
				templateUrl: 'assets/partials/novatos/treino.html'
			})
			.state('iniciantes', {
				url: '/iniciantes',
				templateUrl: 'assets/partials/iniciantes/iniciantes.html'
			});
	});


angular.module('DicasXadrez').controller('ChessGameController', ['$scope', "$timeout", function($scope, $timeout){

  statusEl = $('#gameStatus');

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


angular.module('DicasXadrez').directive('menuNovatos', function () {
    return {
        templateUrl: 'assets/partials/novatos/menu-novatos.html'
    };
});

angular.module('DicasXadrez').directive('treinoXadrez', function () {
    return {
      restrict: 'E',
      template: '<span id="gameStatus" class="label"></span>\
                <div id="board" style="width: 400px"></div>',
      controller: 'ChessDrawController',
    };
});

angular.module('DicasXadrez').directive('empateXadrez', function () {
    return {
      restrict: 'E',
      template: '<ul class="button-group small">\
                    <li><button ng-click="demoReiAfogado()">Rei Afogado</button></li>\
                    <li><button ng-click="demoXequePerpetuo()">Xeque Perpetuo</button></li>\
                    <li><a href="#">Button Z</a></li>\
                </ul></br>\
                <span id="gameStatus" class="label"></span>\
                <div id="board" style="width: 400px"></div>',
      controller: 'ChessDrawController',
    };
});
