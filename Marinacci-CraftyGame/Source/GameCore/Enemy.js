/**
 * @author Charlie Calvert
 */

// An enemy is a tile on the grid that the PC must visit in order to win the game
Crafty.c('Enemy', {
	init: function() { 'use strict';
		this.requires('Actor, spr_enemy');
	},

	// Process a visitation with this enemy
	visit: function() { 'use strict';
		this.destroy();
		Crafty.audio.play('marioKick');
		Crafty.trigger('EnemyVisited', this);
	}
});


