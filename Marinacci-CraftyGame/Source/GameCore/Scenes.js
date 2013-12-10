/**
 * @author Charlie
 */

/* jshint browser: true */

// Draw the initial game state
Crafty.scene('Game', function() { 'use strict';
	this.level=1;
	this.boards = [

        // Level 1
        [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1],
        [1, 0, 0, 0, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 4, 0, 1],
        [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
        
        // Level 2
        [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2],
        [2, 0, 4, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 4, 2],
        [2, 0, 0, 0, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 4, 2],
        [2, 0, 3, 1, 0, 0, 1, 4, 0, 1, 0, 0, 1, 0, 4, 2],
        [2, 0, 0, 1, 4, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 2],
        [2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 2],
        [2, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]],
        
        // Level 3
        [[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 3, 3, 2, 0, 2, 3, 3, 3, 2, 2, 2, 3, 0, 0, 2],
        [2, 3, 0, 2, 2, 2, 3, 0, 3, 2, 0, 2, 3, 0, 0, 1],
        [1, 3, 0, 2, 0, 2, 3, 3, 3, 2, 2, 0, 3, 0, 0, 2],
        [2, 3, 3, 2, 0, 2, 3, 0, 3, 2, 0, 2, 3, 3, 3, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 0, 1],
        [1, 0, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 0, 0, 2],
        [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]]
       ];     
       
    var createEntity = function(col, row, name) {
    Crafty.e(name).at(col, row);
    };
    
    
	var createEntities = function(board) {
	    for (var x = 0; x < Crafty.game.map_grid.width; x++) {
	        for (var y = 0; y < Crafty.game.map_grid.height; y++) {
	            var gridValue = board[y][x];
	            if (gridValue === 1) {
	                createEntity(x, y, 'Rock');
	            } else if (gridValue === 2) {
	                createEntity(x, y, 'Bush');
	            } else if (gridValue === 3) {
	                createEntity(x, y, 'Food');
	            } else if (gridValue === 4) {
	                //createEnemy(x, y);
	                var enemy = Crafty.e('Enemy').at(x, y);
								enemy.setName(enemy._entityName.replace('Entity', 'Enemy'));
								Crafty.game.newEnemy(enemy);
	            }
	        }
	    }
	}; 
	
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
		
		this.gameBoard=this.boards[this.level-1];
		createEntities(this.gameBoard);
		/*var initLevel = function (initGameBoard, initBoards, initLevelNumber){
			var index=initLevelNumber-1;
			initGameBoard=initBoards[index];
			createEntities(this.gameBoard);
			//randomizedGameBoard(this.gameBoard);
		};	
		var levelNumber=this.level;
		initLevel(this.gameboard, this.boards, levelNumber);
		*/	
		var randomizedGameBoard = function(board) {
			// Place a Rock at every edge square on our grid of 16x16 tiles
			for (var x = 0; x < Crafty.game.map_grid.width; x++) {
				for (var y = 0; y < Crafty.game.map_grid.height; y++) {
					var at_edge = x === 0 || x === Crafty.game.map_grid.width - 1 || y === 0 || y === Crafty.game.map_grid.height - 1;
		
					if (at_edge) {
						// Place a Rock entity at the current tile
						Crafty.e('Rock').at(x, y);
						board[x][y] = true;
					} else if (Math.random() < 0.06 && !board[x][y]) {
						// Place a bush entity at the current tile
						Crafty.e('Bush').at(x, y);
						board[x][y] = true;
					} else if (Math.random() < 0.02 && !board[x][y]) {
						//Place a food entity at the current tile
						Crafty.e('Food').at(x, y);
						board[x][y] = true;
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
		};
	

	// Show the victory screen once all enemys are visisted
	this.show_victory = this.bind('EnemyVisited', function() {
		Crafty.game.sendDebugMessage("Enemy Length: " + Crafty('Enemy').length);
		if (!Crafty('Enemy').length) {
			Crafty.scene('Victory');
		}
	});
}, function() { 'use strict';
	// Remove our event binding from above so that we don't
	//  end up having multiple redundant event watchers after
	//  multiple restarts of the game
	this.unbind('EnemyVisited', this.show_victory);
});

// Victory scene : Announce victory, set up a new level
Crafty.scene('Victory', function() { 'use strict';
	// Display some text in celebration of the victory
	Crafty.e('2D, DOM, Text')
		.attr({ x: 0, y: 0 })
		.text("<div id='Banner'>Level Passed!</div>").textFont({ family: 'Segoe',  size: '44px', weight: 'bold' }).textColor('#FF0000');

	// restart the game when a key is pressed
	this.nextLevel = function() {
		if (this.level===3)
		{
			this.level=1;
		}
		else
		{
			this.level++;
		}
		//initLevel(this.gameBoard, this.boards, this.level);
		if(this.level===2)
		{
			Crafty.scene('Level2');
		}
		else
		{
			//Crafty.scene('Level3');
		}
		//this.gameBoard=this.boards[this.level-1];
		//createEntities(this.gameBoard);
	};

	// Bind keydown event. This was done wrong in the demo
	this.bind('KeyDown', this.nextLevel);
}, function() { 'use strict';
	// Remove key binding to prevent multiple restarts
	if (!this.unbind('KeyDown', this.nextLevel)) {
		window.alert("Could not unbind");
	}

});

Crafty.scene('Defeat', function() { 'use strict';
	// Display some text in celebration of the victory
	Crafty.e('2D, DOM, Text')
		.attr({ x: 0, y: 0 })
		.text("<div id='Banner'>Hydrant Soaked You!</div>")
        .textColor('#FFFFFF')
        .textFont({ family: 'Segoe', size: '48px', weight: 'bold' });


	// restart the game when a key is pressed
	this.restart = function() {
		if (this.level===3)
		{
			this.level=1;
		}
		Crafty.scene('Game');
	};

	// Bind keydown event. This was done wrong in the demo
	this.bind('KeyDown', this.restart);
}, function() { 'use strict';
	// Remove key binding to prevent multiple restarts
	if (!this.unbind('KeyDown', this.restart)) {
		window.alert("Could not unbind");
	}

});

// Load binary assets such as images and audio files
Crafty.scene('Loading', function(){ 'use strict';

	var assets = [
	'Assets/backgrounds.png', 
	'Assets/dog.png',
	'Assets/fourHydrantsSprite.png',
	'Assets/smb_kick.wav',
	'Assets/smb_coin.wav'
	];

	// Load our sprite map image
	Crafty.load(assets, function() {
		Crafty.sprite(48, 48, assets[0], {
			spr_rock : [0, 2],
			spr_bush : [0, 1],
			spr_food: [3, 2]			
		});
	Crafty.sprite(48, assets[2],{
			spr_enemy:[0,0],
			});
		//spr_enemy : {hydrant:[0,0],hydrantPissed:[0,1],hydrantSprayStart:[0,2],hydrantSprayEnd:[0,3]}
	
	//  The main character
	Crafty.sprite(48, assets[1], {
		spr_mainCharacter:  [0, 1],
	});

	// Define our sounds for later use
	Crafty.audio.add({
		marioKick: ['Assets/smb_kick.wav'],
		marioCoin: ['Assets/smb_coin.wav']
	});

	// Display text while loading
	Crafty.e('2D, DOM, Text')
		.attr({
		x: 0,
		y: Crafty.viewport.height / 2 - 24, 
		w: Crafty.viewport.width })
		.text('Loading...');

	// Now that our sprites are ready to draw, start the game
	Crafty.scene('Game');
	
	});
});


//Temporary Caveman Coding!!!!

Crafty.scene('Level2', function() { 'use strict';
	this.level=3;
	this.boards = [

        // Level 1
        [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1],
        [1, 0, 0, 0, 4, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 3, 0, 0, 4, 0, 1],
        [1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],
        
        // Level 2
        [[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2],
        [2, 0, 4, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 4, 2],
        [2, 0, 0, 0, 0, 0, 1, 0, 3, 1, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 4, 2],
        [2, 0, 3, 1, 0, 0, 1, 4, 0, 1, 0, 0, 1, 0, 4, 2],
        [2, 0, 0, 1, 4, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 2],
        [2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 4, 2],
        [2, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 2],
        [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]],
        
        // Level 3
        [[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 3, 3, 2, 0, 2, 3, 3, 3, 2, 2, 2, 3, 0, 0, 2],
        [2, 3, 0, 2, 2, 2, 3, 0, 3, 2, 0, 2, 3, 0, 0, 1],
        [1, 3, 0, 2, 0, 2, 3, 3, 3, 2, 2, 0, 3, 0, 0, 2],
        [2, 3, 3, 2, 0, 2, 3, 0, 3, 2, 0, 2, 3, 3, 3, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
        [2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 0, 1],
        [1, 0, 4, 4, 4, 4, 0, 0, 4, 4, 4, 4, 4, 0, 0, 2],
        [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1]]
       ];     
       
    var createEntity = function(col, row, name) {
    Crafty.e(name).at(col, row);
    };
    
    
	var createEntities = function(board) {
	    for (var x = 0; x < Crafty.game.map_grid.width; x++) {
	        for (var y = 0; y < Crafty.game.map_grid.height; y++) {
	            var gridValue = board[y][x];
	            if (gridValue === 1) {
	                createEntity(x, y, 'Rock');
	            } else if (gridValue === 2) {
	                createEntity(x, y, 'Bush');
	            } else if (gridValue === 3) {
	                createEntity(x, y, 'Food');
	            } else if (gridValue === 4) {
	                //createEnemy(x, y);
	                var enemy = Crafty.e('Enemy').at(x, y);
								enemy.setName(enemy._entityName.replace('Entity', 'Enemy'));
								Crafty.game.newEnemy(enemy);
	            }
	        }
	    }
	}; 
	
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
		
		this.gameBoard=this.boards[this.level-1];
		createEntities(this.gameBoard);
		/*var initLevel = function (initGameBoard, initBoards, initLevelNumber){
			var index=initLevelNumber-1;
			initGameBoard=initBoards[index];
			createEntities(this.gameBoard);
			//randomizedGameBoard(this.gameBoard);
		};	
		var levelNumber=this.level;
		initLevel(this.gameboard, this.boards, levelNumber);
		*/	
		var randomizedGameBoard = function(board) {
			// Place a Rock at every edge square on our grid of 16x16 tiles
			for (var x = 0; x < Crafty.game.map_grid.width; x++) {
				for (var y = 0; y < Crafty.game.map_grid.height; y++) {
					var at_edge = x === 0 || x === Crafty.game.map_grid.width - 1 || y === 0 || y === Crafty.game.map_grid.height - 1;
		
					if (at_edge) {
						// Place a Rock entity at the current tile
						Crafty.e('Rock').at(x, y);
						board[x][y] = true;
					} else if (Math.random() < 0.06 && !board[x][y]) {
						// Place a bush entity at the current tile
						Crafty.e('Bush').at(x, y);
						board[x][y] = true;
					} else if (Math.random() < 0.02 && !board[x][y]) {
						//Place a food entity at the current tile
						Crafty.e('Food').at(x, y);
						board[x][y] = true;
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
		};
	

	// Show the victory screen once all enemys are visisted
	this.show_victory = this.bind('EnemyVisited', function() {
		Crafty.game.sendDebugMessage("Enemy Length: " + Crafty('Enemy').length);
		if (!Crafty('Enemy').length) {
			Crafty.scene('Victory');
		}
	});
}, function() { 'use strict';
	// Remove our event binding from above so that we don't
	//  end up having multiple redundant event watchers after
	//  multiple restarts of the game
	this.unbind('EnemyVisited', this.show_victory);
});
