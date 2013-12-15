/**
 * @author Charlie /JP
 */
// This is the player-controlled character
Crafty.c('PlayerCharacter', {
	init : function() {'use strict';
		this.requires('Actor, Fourway, Collision, spr_mainCharacter, SpriteAnimation')
		.fourway(4)
		.stopOnSolids()
		.onHit('Enemy', this.visitEnemy)
		.onHit('Food', this.visitFood)
		.onHit('Boulder', this.visitBoulder)
		.onHit('PowerUp', this.visitPowerUp)
		// These next lines define our four animations
		// each call to .animate specifies:
		// - the name of the animation
		// - the x and y coordinates within the sprite
		// map at which the animation set begins
		// - the number of animation frames *in addition to* the first one
		.animate('PlayerMovingRight', 0, 0, 2)
		.animate('PlayerMovingLeft', 0, 2, 2)
		.animate('PlayerEncounterRight', 0, 1, 2)
		.animate('PlayerEncounterLeft', 0, 3, 2);

		// Watch for a change of direction and switch animations accordingly
		var animation_speed = 16;
		var movingLeft = false;
		var fightMode = false;
		this.bind('NewDirection', function(data) {
			this.encounterMode = false;
			if (this.fightMode) {
				if (movingLeft) {
					this.playAnimation('PlayerEncounterLeft', animation_speed, -1);
				} else {
					this.playAnimation('PlayerEncounterRight', animation_speed, -1);
				}
			} else if (data.x > 0) {
				Crafty.game.changeDirectionMessage("Going Right");
				movingLeft = false;
				this.playAnimation('PlayerMovingRight', animation_speed, -1);

			} else if (data.x < 0) {
				Crafty.game.changeDirectionMessage("Going Left");
				movingLeft = true;
				this.playAnimation('PlayerMovingLeft', animation_speed, -1);
			} else if (data.y > 0) {
				Crafty.game.changeDirectionMessage("Going Down");
				if (movingLeft) {
					this.playAnimation('PlayerMovingLeft', animation_speed, -1);
				} else {
					this.playAnimation('PlayerMovingRight', animation_speed, -1);
				}
			} else if (data.y < 0) {
				Crafty.game.changeDirectionMessage("Going Up");
				if (movingLeft) {
					this.playAnimation('PlayerMovingLeft', animation_speed, -1);
				} else {
					this.playAnimation('PlayerMovingRight', animation_speed, -1);
				}
			} else {
				this.resetAnimation();
			}
		});

		this.bind('youLose', function() {
			Crafty.scene('Failure');
		});
	},

	// Registers a stop-movement function to be called when
	//	this entity hits an entity with the "Solid" component
	stopOnSolids : function() {'use strict';
		this.onHit('Solid', this.stopMovement);
		return this;
	},

	// Stops the movement
	stopMovement : function() {'use strict';
		this._speed = 0;
		if (this._movement) {
			this.x -= this._movement.x;
			this.y -= this._movement.y;
		}
	},

	// Respond to this player visiting an enemy
	visitEnemy : function(data) {'use strict';
		var enemy = data[0].obj;
		this.stopMovement();
		Crafty.game.currentEnemy=enemy.hydrant;
		Crafty.game.sendHydrantHealthMessage(Crafty.game.currentEnemy.health);
		enemy.visit();
		
		// If we are in an encounter, then we do nothing until the user
		// asks to move again.
		if (this.encounterMode) {
			//this.fightMode = true;
			return;
		}
		if (Crafty.game.encounterEnemy(data[0].obj)) {
			enemy = data[0].obj;
			enemy.destroyEnemy();
			this.fightMode = false;
			this.resetAnimation();
		} else {
			this.encounterMode = true;
			this.fightMode = true;
		}
	},

	visitFood : function(data) {'use strict';
		this.stopMovement();
		if (this.encounterMode) {
			return;
		}
		var food = data[0].obj;
		food.eat();
		this.encounterMode = true;
	},
	
	visitBoulder: function(data){'use strict';
		this.stopMovement();
		if (this.encounterMode) {
			return;
		}
		var boulder = data[0].obj;
		boulder.smash();
		this.encounterMode = true;
	
	},
	visitPowerUp: function(data){'use strict';
		this.stopMovement();
		if (this.encounterMode) {
			return;
		}
		var powerUp = data[0].obj;
		powerUp.use();
		this.encounterMode = true;
	}
	
});
