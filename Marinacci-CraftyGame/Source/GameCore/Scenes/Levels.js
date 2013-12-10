/**
 * @author JP
 */

// Draw the initial game state
Crafty.scene('Levels', function() {'use strict';

	//this.level=1;

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
       
       var createEntity = function(name, col, row) {
		Crafty.e(name).at(col, row);
	};

	var createEntities = function(board) {
		for (var x = 0; x < Crafty.game.map_grid.width; x++) {
			for (var y = 0; y < Crafty.game.map_grid.height; y++) {
				var gridValue = board[y][x];
				if (gridValue === 1) {
					createEntity('Rock', x, y);
				} else if (gridValue === 2) {
					createEntity('Bush', x, y);
				} else if (gridValue === 3) {
					createEntity('Food', x, y);
				} else if (gridValue === 4) {
					//createEnemy(x, y);
					var enemy = Crafty.e('Enemy').at(x, y);
					enemy.setName(enemy._entityName.replace('Entity', 'Enemy'));
					Crafty.game.newEnemy(enemy);
				} else if (gridValue === 5) {
					//this.player = Crafty.e('PlayerCharacter').at(x, y);
					var player = createEntity('PlayerCharacter', x, y);
					Crafty.game.newHero(player);
					//this.gameBoard[this.player.at().x][this.player.at().y] = true;

				}
			}
		}
	};
});
