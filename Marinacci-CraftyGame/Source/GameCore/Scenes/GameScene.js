/**
 * @author JP
 */

// Draw the initial game state
Crafty.scene('Game', function() {'use strict';
	Crafty.game.initHeroInfo();
	this.boards = Crafty.game.boards;

	// A 2D array to keep track of all gameBoard tiles
	this.gameBoard = new Array(Crafty.game.map_grid.width);
	for (var i = 0; i < Crafty.game.map_grid.width; i++) {
		this.gameBoard[i] = new Array(Crafty.game.map_grid.height);
		for (var j = 0; j < Crafty.game.map_grid.height; j++) {
			this.gameBoard[i][j] = false;
		}
	}

	var createEntity = function(name, col, row) {
		Crafty.e(name).at(col, row);
	};

	var createEntities = function(board) {
		var enemyCount=0;
		for (var x = 0; x < Crafty.game.map_grid.width; x++) {
			for (var y = 0; y < Crafty.game.map_grid.height; y++) {
				var gridValue = board[y][x];
				if (gridValue === 1) {
					createEntity('Rock', x, y);
				} else if (gridValue === 2) {
					createEntity('Bush', x, y);
				} else if (gridValue === 3) {
					createEntity('Food', x, y);
				} else if (gridValue === 7) {
					createEntity('Tree', x, y);
				} else if (gridValue === 6) {
					createEntity('Boulder', x, y);
				} else if (gridValue === 8) {
					createEntity('PowerUp', x, y);
				} else if (gridValue === 4) {
					//createEnemy(x, y);
					enemyCount++;
					var enemy = Crafty.e('Enemy').at(x, y);
					enemy.setName('Hydrant '+ enemyCount);
					Crafty.game.newEnemy(enemy);
				} else if (gridValue === 5) {
					var player = createEntity('PlayerCharacter', x, y);
					//this.gameBoard[this.player.at().x][this.player.at().y] = true;
				}
			}
		}
		Crafty.game.enemyCount=enemyCount;
		Crafty.game.enemyCountMessage(enemyCount);
	};

	var randomizedGameBoard = function(board) {
		
		var edgeThing;
		var edgeDefined = false;
		// Player character, placed at random location on our grid
		var xpos = Math.floor(Math.random() * 14 + 1);
		var ypos = Math.floor(Math.random() * 8 + 1);
		var player = Crafty.e('PlayerCharacter').at(xpos, ypos);
		board[xpos][ypos] = true;
		//this.gameBoard[this.player.at().x][this.player.at().y] = true;

		// Place a Rock at every edge square on our grid of 16x16 tiles
		for (var x = 0; x < Crafty.game.map_grid.width; x++) {
			for (var y = 0; y < Crafty.game.map_grid.height; y++) {
				var at_edge = x === 0 || x === Crafty.game.map_grid.width - 1 || y === 0 || y === Crafty.game.map_grid.height - 1;

				if (at_edge) {
					// Place a Rock or a Bush entity at the current tile
					var random = Math.random();
					if(random <=0.25){
						if(!edgeDefined){
							edgeThing = 'rock';
							edgeDefined = true;
						}
					//Switch case would probably be more elegant here -- work for later..	
					}else if (random >0.25 && random <=0.5)
					{
						if(!edgeDefined){
							edgeThing = 'bush';
							edgeDefined = true;
						}
					}
					else if (random >0.5 && random <=0.75)
					{
						if(!edgeDefined){
							edgeThing = 'tree';
							edgeDefined = true;
						}
					}
					else
					{
						if(!edgeDefined){
							edgeThing = 'boulder';
							edgeDefined = true;
						}
					}
					if(edgeThing === 'rock'){
						Crafty.e('Rock').at(x, y);
					}else if (edgeThing==='bush'){
						Crafty.e('Bush').at(x, y);
					}else {
						Crafty.e('Tree').at(x, y);
					}
					board[x][y] = true;
				} 
				//non edge
				else if (Math.random() < 0.1 && !board[x][y]) {
					// Place a bush entity at the current tile
					Crafty.e('Bush').at(x, y);
					board[x][y] = true;
				} else if (Math.random() < 0.03 && !board[x][y]) {
					// Place a rock entity at the current tile
					Crafty.e('Rock').at(x, y);
					board[x][y] = true;
					// Place a food entity at the current tile
				} else if (Math.random() < 0.01 && !board[x][y]) {
					// Place a bush entity at the current tile
					Crafty.e('Tree').at(x, y);
					board[x][y] = true;
				} else if (Math.random() < 0.03 && !board[x][y]) {
					// Place a rock entity at the current tile
					Crafty.e('Boulder').at(x, y);
					board[x][y] = true;
				}else if (Math.random() < 0.05 && !board[x][y]) {
					Crafty.e('Food').at(x, y);
					board[x][y] = true;
				}else if (Math.random() < 0.001 && !board[x][y]) {
					Crafty.e('PowerUp').at(x, y);
					board[x][y] = true;
				}
				
			}
		}
		// Generate up between one and five enemys on the map in random locations
		var max_enemys = 20;
		var enemyCount = 0;
		while (enemyCount < 1) {
			for (var col = 0; col < Crafty.game.map_grid.width; col++) {
				for (var row = 0; row < Crafty.game.map_grid.height; row++) {
					if (Math.random() < Crafty.game.level/100) {
						if (Crafty('Enemy').length < max_enemys && !board[col][row]) {
							var enemy = Crafty.e('Enemy').at(col, row);
							enemyCount++;
							enemy.setName('Hydrant '+ enemyCount);
							Crafty.game.newEnemy(enemy);		
						}
					}
				}
			}
		}
		Crafty.game.enemyCount=enemyCount;
		Crafty.game.enemyCountMessage(enemyCount);
	};
	
	/*
	//Start the game on specified level
	var testLevel=9;
	this.gameBoard = this.boards[testLevel-1];
	createEntities(this.gameBoard);
	*/

	//main gameBoard initializer
	if (Crafty.game.level <= this.boards.length) {
		this.gameBoard = this.boards[Crafty.game.level - 1];
		createEntities(this.gameBoard);
	} else {
		randomizedGameBoard(this.gameBoard);
	}

	// Show the victory screen once all enemies are visisted
	this.showVictory = this.bind('EnemyDestroyed', function() {
		Crafty.game.sendDebugMessage("Enemies Left: " + Crafty('Enemy').length);
		if (!Crafty('Enemy').length) {
			Crafty.scene('Victory');
		}
	});
}, function() {'use strict';
	// Remove our event binding from above so that we don't
	//  end up having multiple redundant event watchers after
	//  multiple restarts of the game
	this.unbind('EnemyDestroyed', this.showVictory);
});
