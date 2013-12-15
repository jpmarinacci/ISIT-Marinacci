/**
 * @author Charlie Calvert
 */

// Food is a tile on the grid that the PC can eat
Crafty.c('Food', {

	init: function() { 'use strict';
		this.requires('Actor, spr_food');
	},

	eat: function() { 'use strict';
		this.destroy();
		Crafty.audio.play('marioCoin');
		Crafty.game.encounterFood(this);
	},

	switchComponent: function() { 'use strict';
		this.toggleComponent('Food01', 'Food02');
	}
});

