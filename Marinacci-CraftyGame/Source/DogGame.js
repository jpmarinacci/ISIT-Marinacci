/* jshint browser: true */

angular.module('dogGameMod', ['entitiesMod', 'gameWrapMod', 'gameBoardsMod', 'configMod'])
.factory('dogGameService', function(gameEventService, entities, gameBoards, gameWrap, configData) {'use strict';
	return {

		map_grid : null,
		misses : 0,
		defaultMapGrid : {
			width : 16,
			height : 10,
			tile : {
				width : 48,
				height : 48
			}
		},
		boards : [],
		loadGameBoards : function() {
			this.boards = gameBoards;
		},
		level : 1,

		points : 0,

		mainHero : entities.hero,
		enemies : [],
		enemyCount : 0,
		currentEnemy: {},
		
		newEnemy : function(enemy) {
			enemy.hydrant = entities.hydrant();
			return this.enemies.push(enemy);
		},
		encounterEnemy : function(enemy) {
			this.mainHero.health -= enemy.hydrant.damage;
			enemy.hydrant.health -= this.mainHero.damage;
			if (enemy.hydrant.health < 0) {
				enemy.hydrant.health = 0;
			}
			this.currentEnemy = enemy.hydrant;
			gameEventService.hydrantHealthBroadcast(enemy.hydrant.health);
			gameEventService.heroHealthBroadcast(this.mainHero.health);
			if (this.mainHero.health > 0) {
				
				if (enemy.hydrant.health <= 0) {
					gameEventService.encounterBroadcast('Destroyed Hydrant');
					return true;
				} else {
					gameEventService.encounterBroadcast('hit hydrant');
					return false;
				}
			} else {
				//case that hero loses
				this.mainHero.health = 20;
				gameEventService.heroHealthBroadcast(this.mainHero.health);
				if(!configData.testing){
					Crafty.scene('Defeat');
				}
				return false;
			}
		},
		
		encounterFood : function(food) {
			this.mainHero.health += 5;
			this.points+=25;
			gameEventService.pointsBroadcast(this.points);
			gameEventService.heroHealthBroadcast(this.mainHero.health);
			gameEventService.encounterBroadcast('Found Item: Food');
			return true;
		},

		initHeroInfo : function() {
			gameEventService.heroHealthBroadcast(this.mainHero.health);
			gameEventService.speciesBroadcast(this.mainHero.species);
			gameEventService.classBroadcast(this.mainHero.classType);
		},

		sendDebugMessage : function(message) {
			return gameEventService.debugBroadcast(message);
		},

		changeLevelMessage : function(message) {
			return gameEventService.levelBroadcast(message);
		},

		enemyCountMessage : function(message) {
			return gameEventService.enemyCountBroadcast(message);
		},
		
		sendHydrantHealthMessage : function(message){
			return gameEventService.hydrantHealthBroadcast(message);
		},

		changeDirectionMessage : function(message) {
			return gameEventService.changeDirectionBroadcast(message);
		},

		reportEncounterMessage : function(message) {
			return gameEventService.encounterBroadcast(message);
		},
		
		scorePointsMessage: function(message){
			return gameEventService.pointsBroadcast(message);
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
			this.loadGameBoards();
			gameWrap.startGame(gameDiv, this);
			this.initHeroInfo();
		}
	};
});

