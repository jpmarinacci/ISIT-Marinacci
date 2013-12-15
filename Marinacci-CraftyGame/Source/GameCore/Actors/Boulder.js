/**
 * @author JP
 */

Crafty.c('Boulder', {
	init: function() { 'use strict';
		this.requires('Actor, spr_boulder');
	},

	smash: function() { 'use strict';
		this.destroy();
		Crafty.audio.play('marioBreak');
		Crafty.game.encounterBoulder(this);
	},

});

