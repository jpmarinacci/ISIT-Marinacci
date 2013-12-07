/* jshint browser: true */

angular.module('elfGameMod', ['entities']).factory('elfgame', function(gameEventService, people) {'use strict';

	return {

		map_grid : null,

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
			gameEventService.towerBroadcast(message);
		},

		changeDirectionMessage : function(message) {
			gameEventService.changeDirectionBroadcast(message);
		},

		sendDebugMessage : function(message) {
			gameEventService.debugBroadcast(message);
		},

		rollD3 : function(village) {
			people.hero.hitPoints -= 2;
			village.tower.hitPoints -= 3;
		},

		encounter : function(village) {

			gameEventService.debugBroadcast('Hydrant hit points: ' + village.tower.hitPoints);
			this.rollD3(village);
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
			this.villages.push(village);
		},

		goLeft : function() {
			Crafty.trigger('goLeft', Crafty);
		},

		stopMove : function() {
			Crafty.trigger('stopMove', Crafty);
		},

		// Get width of the game screen in pixels
		width : function() {
			return this.map_grid.width * this.map_grid.tile.width;
		},

		// Get height of the game screen in pixels
		height : function() {
			return this.map_grid.height * this.map_grid.tile.height;
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
			Crafty.init(this.width(), this.height(), gameDiv);
			Crafty.game = this;
			Crafty.background('rgb(0, 109, 20)');

			// Call load scene, defined below
			Crafty.scene('Loading');
		}
	};
});

