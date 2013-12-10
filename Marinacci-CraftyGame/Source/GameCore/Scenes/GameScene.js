/**
 * @author JP
 */

// Draw the initial game state
Crafty.scene('Game', function() { 'use strict';

	// A 2D array to keep track of all gameBoard tiles
	this.gameBoard = new Array(Crafty.game.map_grid.width);
	for (var i = 0; i < Crafty.game.map_grid.width; i++) {
		this.gameBoard[i] = new Array(Crafty.game.map_grid.height);
		for (var j = 0; j < Crafty.game.map_grid.height; j++) {
			this.gameBoard[i][j] = false;
		}
	}

	// Player character, placed at 4, 5 on our grid
	this.player = Crafty.e('PlayerCharacter').at(4, 5);
	this.gameBoard[this.player.at().x][this.player.at().y] = true;


	//this.gameBoard=this.boards[this.level-1];
	//createEntities(this.gameBoard);
		/*var initLevel = function (initGameBoard, initBoards, initLevelNumber){
			var index=initLevelNumber-1;
			initGameBoard=initBoards[index];
			createEntities(this.gameBoard);
			//randomizedGameBoard(this.gameBoard);
		};	
		var levelNumber=this.level;
		initLevel(this.gameboard, this.boards, levelNumber);*/
			
	//var randomizedGameBoard = function(board) {
	// Place a Rock at every edge square on our grid of 16x16 tiles
	for (var x = 0; x < Crafty.game.map_grid.width; x++) {
		for (var y = 0; y < Crafty.game.map_grid.height; y++) {
			var at_edge = x === 0 || x === Crafty.game.map_grid.width - 1 || y === 0 || y === Crafty.game.map_grid.height - 1;

			if (at_edge) {
				// Place a Rock entity at the current tile
				Crafty.e('Rock').at(x, y);
				this.gameBoard[x][y] = true;
			} else if (Math.random() < 0.06 && !this.gameBoard[x][y]) {
				// Place a bush entity at the current tile
				Crafty.e('Bush').at(x, y);
				this.gameBoard[x][y] = true;
			} else if (Math.random() < 0.05 && !this.gameBoard[x][y]) {
				Crafty.e('Food').at(x, y);
				this.gameBoard[x][y] = true;
			}
		}
	}
			// Generate up between one and five enemys on the map in random locations
			var max_enemys = 7;
			var enemyCount = 0;
			while (enemyCount < 1) {
				for (var col = 0; col < Crafty.game.map_grid.width; col++) {
					for (var row = 0; row < Crafty.game.map_grid.height; row++) {
						if (Math.random() < 0.03) {
							if (Crafty('Enemy').length < max_enemys && !this.gameBoard[col][row]) {
								var enemy = Crafty.e('Enemy').at(col, row);
								enemy.setName(enemy._entityName.replace('Entity', 'Enemy'));
								Crafty.game.newEnemy(enemy);
								enemyCount++;
							}
						}
					}
				}
			}
	
	

	// Show the victory screen once all enemies are visisted
	this.showVictory = this.bind('EnemyDestroyed', function() {
		Crafty.game.sendDebugMessage("Enemy Length: " + Crafty('Enemy').length);
		if (!Crafty('Enemy').length) {
			Crafty.scene('Victory');
		}
	});
}, function() { 'use strict';
	// Remove our event binding from above so that we don't
	//  end up having multiple redundant event watchers after
	//  multiple restarts of the game
	this.unbind('EnemyDestroyed', this.showVictory);
});
