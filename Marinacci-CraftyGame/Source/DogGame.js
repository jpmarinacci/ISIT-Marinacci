/* jshint browser: true */

angular.module('dogGameMod', ['entitiesMod', 'gameWrapMod'])
.factory('dogGameService', function(gameEventService, entities, gameWrap) {
	'use strict';
	return {

		map_grid : null,
		misses: 0,
		defaultMapGrid : {
			width : 16,
			height : 10,
			tile : {
				width : 48,
				height : 48
			}
		},

		enemys : [],

		reportEvent : function(message) {
			return gameEventService.hydrantBroadcast(message);
		},

		changeDirectionMessage : function(message) {
			return gameEventService.changeDirectionBroadcast(message);
		},

		sendDebugMessage : function(message) {
			return gameEventService.debugBroadcast(message);
		},
		encounterEnemy : function(enemy) {
			entities.hero.hitPoints -= 2;
			enemy.hydrant.hitPoints -= 3;
		},
		encounterFood : function(food) {
			gameEventService.debugBroadcast("food");
			gameEventService.encounterBroadcast('Food success');
			return true;
		},
		encounter : function(enemy) {

			gameEventService.debugBroadcast('Hydrant hit points: ' + enemy.hydrant.hitPoints);
			this.encounterEnemy(enemy);
			gameEventService.debugBroadcast('Hit Hydrant, hydrant health: ' + enemy.hydrant.hitPoints + ' hero health: ' + entities.hero.hitPoints);
			if (entities.hero.hitPoints > 0) {

				if (enemy.hydrant.hitPoints <= 0) {
					gameEventService.encounterBroadcast('destroyed hydrant');
					entities.hero.hitPoints+=2;
					return true;
				} else {
					gameEventService.encounterBroadcast('Hit hydrant ' + '\n' + 'Hydrant health: ' + enemy.hydrant.hitPoints + '\n Hero health: ' + entities.hero.hitPoints);
					return false;
				}
			}
			else
			{
				entities.hero.hitPoints=20;
				Crafty.scene('Defeat');			
			}
		},

		newEnemy : function(enemy) {
			enemy.hydrant = entities.hydrant();
			return this.enemys.push(enemy);
		},

		goLeft : function() {
			Crafty.trigger('goLeft', Crafty);
			return true;
		},

		stopMove : function() {
			Crafty.trigger('stopMove', Crafty);
			return true;
		},

		// Get width of the game screen in pixels
		width : function() {
			return this.map_grid.width * this.map_grid.tile.width;
		},

		// Get height of the game screen in pixels
		height : function() {
			return this.map_grid.height * this.map_grid.tile.height;
		},

		initMapGrid : function(mapGrid) {
			this.map_grid = mapGrid;
		},

		// Initialize and start our game
		start : function(mapGrid) {
			// Start crafty
			var gameDiv = document.getElementById("gameBoard");
			if (mapGrid) {
				this.map_grid = mapGrid;
			} else {
				this.map_grid = this.defaultMapGrid;
			}
			gameWrap.startGame(gameDiv, this);
		}
	};
});
