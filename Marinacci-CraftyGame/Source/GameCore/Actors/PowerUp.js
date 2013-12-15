/**
 * @author Charlie Calvert
 */

// Food is a tile on the grid that the PC can eat
Crafty.c('PowerUp', {

	init: function() { 'use strict';
		this.requires('Actor, spr_orb');
	},

	use: function() { 'use strict';
		this.destroy();
		Crafty.audio.play('marioFlagPole');
		Crafty.game.encounterPowerUp(this);
	},

	switchComponent: function() { 'use strict';
		this.toggleComponent('Food01', 'Food02');
	}
});

