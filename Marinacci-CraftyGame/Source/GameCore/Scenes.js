/**
 * @author Charlie
 */

/* jshint browser: true */

// Draw the initial game state
Crafty.scene('Game', function() {'use strict';

	// A 2D array to keep track of all gameBoard tiles
	this.gameBoard = new Array(Crafty.game.map_grid.width);
	for (var i = 0; i < Crafty.game.map_grid.width; i++) {
		this.gameBoard[i] = new Array(Crafty.game.map_grid.height);
		for (var j = 0; j < Crafty.game.map_grid.height; j++) {
			this.gameBoard[i][j] = false;
		}
	}

	// Player character, placed at 5, 5 on our grid
	this.player = Crafty.e('PlayerCharacter').at(5, 5);
	this.gameBoard[this.player.at().x][this.player.at().y] = true;

	// Place a tree at every edge square on our grid of 16x16 tiles
	for (var x = 0; x < Crafty.game.map_grid.width; x++) {
		for (var y = 0; y < Crafty.game.map_grid.height; y++) {
			var at_edge = x === 0 || x === Crafty.game.map_grid.width - 1 || y === 0 || y === Crafty.game.map_grid.height - 1;

			if (at_edge) {
				// Place a tree entity at the current tile
				Crafty.e('Tree').at(x, y);
				this.gameBoard[x][y] = true;
			} else if (Math.random() < 0.06 && !this.gameBoard[x][y]) {
				// Place a bush entity at the current tile
				Crafty.e('Bush').at(x, y);
				this.gameBoard[x][y] = true;
			}
		}
	}

	// Generate up between one and five villages on the map in random locations
	var max_villages = 5;
	var villageCount = 0;
	while (villageCount < 1) {
		for (var col = 0; col < Crafty.game.map_grid.width; col++) {
			for (var row = 0; row < Crafty.game.map_grid.height; row++) {
				if (Math.random() < 0.02) {
					if (Crafty('Village').length < max_villages && !this.gameBoard[col][row]) {
						var village = Crafty.e('Village').at(col, row);
						village.setName(village._entityName.replace('Entity', 'Village'));
						Crafty.game.newVillage(village);
						villageCount++;
					}
				}
			}
		}
	}

	// Show the victory screen once all villages are visisted
	this.show_victory = this.bind('VillageVisited', function() {
		Crafty.game.sendDebugMessage("Village Length: " + Crafty('Village').length);
		if (!Crafty('Village').length) {
			Crafty.scene('Victory');
		}
	});
}, function() {'use strict';
	// Remove our event binding from above so that we don't
	//  end up having multiple redundant event watchers after
	//  multiple restarts of the game
	this.unbind('VillageVisited', this.show_victory);
});

// Victory scene : Announce victory, set up a new game
Crafty.scene('Victory', function() {'use strict';
	// Display some text in celebration of the victory
	Crafty.e('2D, DOM, Text').attr({
		x : 0,
		y : 0
	}).text("<div id='VictoryScene'>Level Passed!</div>").textFont({ family: 'Segoe',  size: '44px', weight: 'bold' }).textColor('#FF0000');

	// restart the game when a key is pressed
	this.restart = function() {
		Crafty.scene('Game');
	};

	// Bind keydown event. This was done wrong in the demo
	this.bind('KeyDown', this.restart);
}, function() {'use strict';
	// Remove key binding to prevent multiple restarts
	if (!this.unbind('KeyDown', this.restart)) {
		window.alert("Could not unbind");
	}

});

// Load binary assets such as images and audio files
Crafty.scene('Loading', function() {'use strict';

	var assets = ['Assets/backgrounds.png', 'Assets/dog.png','Assets/smb_breakblock.wav'];

	// Load our sprite map image
	Crafty.load(assets, function() {
		Crafty.sprite(48, 48, assets[0], {
			spr_tree : [0, 2],
			spr_bush : [0, 1],
			spr_village : [1, 0]
		});

		//  The main character
		Crafty.sprite(48, assets[1], {
			spr_mainCharacter : [0, 1],
		}, 0, 0);

		// Define our sounds for later use
		Crafty.audio.add({
			breakblock : ['Assets/smb_breakblock.wav']
		});

		// Display text while loading
		Crafty.e('2D, DOM, Text').attr({
			x : 0,
			y : Crafty.viewport.height / 2 - 24,
			w : Crafty.viewport.width
		}).text('Loading...');

		// Now that our sprites are ready to draw, start the game
		Crafty.scene('Game');
	});
});
