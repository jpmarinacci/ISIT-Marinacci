/* jshint browser: true */

angular.module('dogGameMod', ['entitiesMod', 'gameWrapMod','gameBoardsMod'])
.factory('dogGameService', function(gameEventService, entities, gameBoards, gameWrap) {
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
		boards: [],
		loadGameBoards: function(){
			this.boards=gameBoards;
		},
		level: 1,
		
		points:0,

		enemys : [],
		enemyCount:0,
		
		encounterEnemy : function(enemy) {
			//entities.hero.health -= 2;
			enemy.hydrant.health -= 3;
			if(enemy.hydrant.health<0){
				enemy.hydrant.health=0;
			}
			gameEventService.hydrantHealthBroadcast(enemy.hydrant.health);
			gameEventService.heroHealthBroadcast(entities.hero.health);
		},
		encounterFood : function(food) {
			entities.hero.health +=5;
			gameEventService.heroHealthBroadcast(entities.hero.health);
			gameEventService.encounterBroadcast('Found item: Food');
			return true;
		},
		encounter : function(enemy) {
			this.encounterEnemy(enemy);
			if (entities.hero.health > 0) {

				if (enemy.hydrant.health <= 0) {
					gameEventService.encounterBroadcast('destroyed hydrant');
					return true;
				} else {
					gameEventService.encounterBroadcast('hit hydrant');
					return false;
				}
			}
			else
			{
				entities.hero.health=20;
				gameEventService.heroHealthBroadcast(entities.hero.health);
				Crafty.scene('Defeat');			
			}
		},

		newEnemy : function(enemy) {
			enemy.hydrant = entities.hydrant();
			gameEventService.hydrantHealthBroadcast(enemy.hydrant.health);
			return this.enemys.push(enemy);
		},
		
		initHero : function(){
			gameEventService.heroHealthBroadcast(entities.hero.health);
			gameEventService.speciesBroadcast(entities.hero.species);
			gameEventService.classBroadcast(entities.hero.className);
		},

		reportEncounter : function(message) {
			return gameEventService.encounterBroadcast(message);
		},

		changeDirectionMessage : function(message) {
			return gameEventService.changeDirectionBroadcast(message);
		},

		sendDebugMessage : function(message) {
			return gameEventService.debugBroadcast(message);
		},
		
		changeLevelMessage: function(message){
			return gameEventService.levelBroadcast(message);
		},
		
		enemyCountMessage: function(message){
			return gameEventService.enemyCountBroadcast(message);
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
		
		initHeroInfo: function (hero){
			gameEventService.speciesBroadcast(hero.species);
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
			this.initHeroInfo(entities.hero);
		}
	};
});

