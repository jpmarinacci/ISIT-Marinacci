/**
 * @author JP
 */

// An enemy is a tile on the grid that the PC must visit in order to win the game
Crafty.c('Enemy', {
	init: function() { 'use strict';
		this.requires('Actor, spr_enemy, SpriteAnimation')
		.animate('EnemyAttack', 0, 0, 2);
		},
	count:0,
	
	visit: function() { 'use strict';
		if(Crafty.game.currentEnemy.health>4){
			var animation_speed=16;
			this.playAnimation('EnemyAttack', animation_speed, -1);
		}
		else if (Crafty.game.currentEnemy.health>0){
			this.resetAnimation();
			this.sprite(3, 0);
		}
	},
	destroyEnemy: function() {'use strict';
		Crafty.audio.play('marioKick');
		Crafty.game.points+=100;
		Crafty.game.scorePointsMessage(Crafty.game.points);
		Crafty.game.enemyCount--;
		Crafty.game.enemyCountMessage(Crafty.game.enemyCount);
		this.destroy();
		Crafty.trigger('EnemyDestroyed', this);	
	}
		
	
	/*
	// Process a visitation with this enemy
	visit: function() { 'use strict';
		
		this.count++;
		var animation_speed=16;
		switch (this.count) {
			case 1:
				this.sprite(3, 0);
				break;
			case 2:
				break;	
			case 3:
				this.playAnimation('EnemyAttack', animation_speed, -1);
				break;

			//case 3:
				//this.sprite(3, 0);
				//break;
			default:
				Crafty.audio.play('marioKick');
				Crafty.game.points+=100;
				Crafty.game.scorePointsMessage(Crafty.game.points);
				Crafty.game.enemyCount--;
				Crafty.game.enemyCountMessage(this.enemyCount);
				this.destroy();
				Crafty.trigger('EnemyDestroyed', this);			
				break;
		}
	}
	*/
});


