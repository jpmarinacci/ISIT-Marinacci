/* jshint browser: true */

angular.module('elfGameMod', ['entitiesMod', 'gameWrapMod'])
.factory('elfGameService', function(gameEventService, people, gameWrap) {
	'use strict';
	return {

		map_grid : null,
		misses: 0,
		defaultMapGrid : {
			width : 14,
			height : 10,
			tile : {
				width : 48,
				height : 48
			}
		},

		villages : [],

		reportEvent : function(message) {
			return gameEventService.towerBroadcast(message);
		},

		changeDirectionMessage : function(message) {
			return gameEventService.changeDirectionBroadcast(message);
		},

		sendDebugMessage : function(message) {
			return gameEventService.debugBroadcast(message);
		},
		encounterVillage : function(village) {
			people.hero.hitPoints -= 2;
			village.tower.hitPoints -= 3;
		},
		encounterFood : function(food) {
			gameEventService.debugBroadcast("food");
			gameEventService.encounterBroadcast('Food success');
			return true;
		},
		encounter : function(village) {

			gameEventService.debugBroadcast('Hydrant hit points: ' + village.tower.hitPoints);
			this.encounterVillage(village);
			gameEventService.debugBroadcast('Hit Hydrant, hydrant health: ' + village.tower.hitPoints + ' hero health: ' + people.hero.hitPoints);
			if (people.hero.hitPoints > 0) {

				if (village.tower.hitPoints <= 0) {
					gameEventService.encounterBroadcast('destroyed hydrant');
					people.hero.hitPoints+=2;
					return true;
				} else {
					gameEventService.encounterBroadcast('Hit hydrant ' + '\n' + 'Hydrant health: ' + village.tower.hitPoints + '\n Hero health: ' + people.hero.hitPoints);
					return false;
				}
			}
			else
			{
				people.hero.hitPoints=20;
				Crafty.scene('Defeat');
				
			}
		},

		newVillage : function(village) {
			village.tower = people.tower();
			return this.villages.push(village);
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

