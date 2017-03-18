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
				abstract: true,
				url: '/iniciantes',
				template: '<ui-view/>'
			})
			.state('iniciantes.empates', {
				parent: 'iniciantes',
				url: '/empates',
				templateUrl: 'assets/partials/iniciantes/empates.html'
			})
			.state('iniciantes.jogadas-avancadas', {
				parent: 'iniciantes',
				url: '/jogadas-avancadas',
				templateUrl: 'assets/partials/iniciantes/jogadas-avancadas.html'
			})
			.state('iniciantes.fases', {
				parent: 'iniciantes',
				url: '/fases',
				templateUrl: 'assets/partials/iniciantes/fases.html'
			})
			.state('taticas', {
				abstract: true,
				url: '/taticas',
				template: '<ui-view/>'
			})
			.state('taticas.sobre', {
				parent: 'taticas',
				url: '/sobre',
				templateUrl: 'assets/partials/taticas/sobre.html'
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
  statusEl.html('Demonstração das situações de empate.');
  var i = 0;

  $scope.demoReiAfogado = function (){
    board.position('7k/5K2/8/6Q1/8/8/8/8');
    $timeout(function () {
        board.move('g5-g6');
        statusEl.html('Fim de jogo posição de empate');
      },i+=1000);
  };

  $scope.demoXequePerpetuo = function (){
    board.position('6k1/6p1/8/6KQ/1r6/q2b4/8/8');

     $timeout(function () {
        statusEl.html('Brancas a jogar');
        board.move('h5-e8');
      },i+=1000);

     $timeout(function () {
      statusEl.html('Pretas a jogar');
      board.move('g8-h7');
      },i+=1000);

     $timeout(function () {
        statusEl.html('Brancas a jogar');
        board.move('e8-h5');
      },i+=1000);

     $timeout(function () {
        statusEl.html('Pretas a jogar');
        board.move('h7-g8');
      },i+=1000);

     $timeout(function () {
        statusEl.html('Brancas a jogar');
        board.move('h5-e8');
      },i+=1000);

     $timeout(function () {
      statusEl.html('Pretas a jogar');
      board.move('g8-h7');
      },i+=1000);

     $timeout(function () {
        statusEl.html('fim de jogo posição de empate');
     },i+=1000);
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


angular.module('DicasXadrez').controller('ChessTaticsController', ['$scope', "$timeout","$element", function($scope, $timeout,$element){
  statusEl = $('#gameStatus');
  statusEl.html('Demonstração das táticas básicas.');
  var i = 0;
  $scope.executando_jogada = false;

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
    $scope.executando_jogada = true;
    removeGreySquares();
    statusEl.html('Pretas a jogar.');
    board.position('r1bqkb1r/ppp2Npp/2np1n2/4p3/2B1P3/8/PPPP1PPP/RNBQK2R');
    greySquare('d8');
    greySquare('h8');
    greySquare('d5');
    greySquare('e6');
    greySquare('f7');
    $scope.executando_jogada = false;
  };

  $scope.demoPregadura = function (){
    $scope.executando_jogada = true;
    removeGreySquares();
    statusEl.html('Pretas a jogar.');
    board.position('r2qkbnr/ppp1pppp/2np4/1B6/4P1b1/5N2/PPPP1PPP/RNBQK2R');
    greySquare('c6');
    greySquare('d7');
    greySquare('e8');
    $scope.executando_jogada = false;
  };
  $scope.demoEspetos = function (){
    $scope.executando_jogada = true;
    removeGreySquares();
    statusEl.html('Pretas a jogar.');
    board.position('1Q2k2r/6pp/8/2q5/8/7P/6P1/7K');
    greySquare('e8');
    greySquare('h8');
    $scope.executando_jogada
    $timeout(function () {
      console.log($scope.executando_jogada)
    },100000)
    $scope.executando_jogada = false;
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
      controller: 'ChessGameController',
    };
});

angular.module('DicasXadrez').directive('empateXadrez', function () {
    return {
      restrict: 'E',
      template: '<ul class="button-group small">\
                    <li><button ng-click="demoReiAfogado()">Rei Afogado</button></li>\
                    <li><button ng-click="demoXequePerpetuo()">Xeque Perpetuo</button></li>\
                </ul></br>\
                <span id="gameStatus" class="label"></span>\
                <div id="board" style="width: 464px"></div>',
      controller: 'ChessDrawController',
    };
});

angular.module('DicasXadrez').directive('jogadasAvancadasXadrez', function () {
    return {
      restrict: 'E',
      template: '<ul class="button-group small">\
                    <li><button ng-click="demoRoque()">Roque</button></li>\
                    <li><button ng-click="demoEnPassant()">Captura en passant</button></li>\
                </ul></br>\
                <span id="gameStatus" class="label"></span>\
                <div id="board" style="width: 464px"></div>',
      controller: 'ChessAdvancedController',
    };
});

angular.module('DicasXadrez').directive('taticasXadrez', function () {
    return {
      restrict: 'E',
      template: '<ul class="button-group small">\
                    <li><button  ng-click="demoGarfos()">Garfos</button></li>\
                    <li><button  ng-click="demoPregadura()">Pregaduras</button></li>\
                    <li><button  ng-click="demoEspetos()">Espetos</button></li>\
                </ul></br>\
                <span id="gameStatus" class="label"></span>\
                <div id="board" style="width: 464px"></div>',
      controller: 'ChessTaticsController',
    };
});
