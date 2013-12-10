/**
 * @author Charlie Calvert
 */

// An enemy is a tile on the grid that the PC must visit in order to win the game
Crafty.c('Enemy', {
	init: function() { 'use strict';
		this.requires('Actor, spr_enemy, SpriteAnimation')
		.animate('EnemyAttack', 0, 0, 2);
		},
	count:0,
	
	// Process a visitation with this enemy
	visit: function() { 'use strict';
		this.count++;
		var animation_speed=16;
		//this.playAnimation('EnemyAttack', animation_speed, -1); 
		switch (this.count) {
			case 1:
				this.sprite(3, 0);
				break;
			case 2:
				this.playAnimation('EnemyAttack', 16, -1); //animationspeed-16
				break;

			//case 3:
				//this.sprite(3, 0);
				//break;

			default:
				this.destroy();
				Crafty.audio.play('marioKick');
				break;
		}
		//this.destroy();*/
		Crafty.trigger('EnemyVisited', this);
	}
});

