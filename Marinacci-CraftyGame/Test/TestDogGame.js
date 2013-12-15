/**
 * @author JP
 */

describe("Test Dog Game", function() {'use strict';
	var dogController = null;
	var dogGameService = null;

	beforeEach(function() {
		module('dogGameMod');
		module('dogPlayer');
	});

	beforeEach(inject(function($rootScope, $controller, $injector) {
		dogController = $rootScope.$new();
		$controller('DogController', {
			$scope : dogController
		});
		dogGameService = $injector.get('dogGameService');
	}));

	it("Can create gameEventService", function() {
		expect(dogGameService).toNotEqual(null);
	});

	it("gets the width of the playing field", function() {
		dogGameService.initMapGrid({
			width : 16,
			height : 10,
			tile : {
				width : 48,
				height : 48
			}
		});
		var width = 16;
		var tileWidth = 48;
		var expectedWidth = width * tileWidth;
		var actualWidth = dogGameService.width();
		expect(actualWidth).toEqual(expectedWidth);
	});

	it("gets the height of the playing field", function() {
		dogGameService.initMapGrid({
			width : 16,
			height : 10,
			tile : {
				width : 48,
				height : 48
			}
		});
		var height = 10;
		var tileHeight = 48;
		var expectedHeight = height * tileHeight;
		var actualHeight = dogGameService.height();
		expect(actualHeight).toEqual(expectedHeight);
	});

	it("registers a new enemy with the enemys array", function() {
		var actual = dogGameService.newEnemy({});
		expect(actual).toEqual(1);
	});

	it("simulates an encounter", function() {
		var actual = dogGameService.encounterEnemy({
			hydrant : {
				health : 6,
				damage : 2
			}
		});
		expect(actual).toBe(false);
	});

	it("simulates an encounter hero end", function() {
		var testHero = {
			health : 2,
			damage : 2
		};
		dogGameService.mainHero = testHero;
		var actual = dogGameService.encounterEnemy({
			hydrant : {
				health : 2,
				damage : 2
			}
		});
		expect(actual).toBe(false);
	});

	it("simulates an encounter hydrant end", function() {
		var actual = dogGameService.encounterEnemy({
			hydrant : {
				health : 0,
				damage : 2
			}
		});
		expect(actual).toBe(true);
	});

	it("simulates a food encounter", function() {
		var actual = dogGameService.encounterFood({ }, 0);
		expect(actual).toBe(true);
	});

	it("sends initial hero health information to dogController", function() {
		var actualHealth = dogGameService.mainHero.health;
		dogGameService.initHeroInfo();
		expect(dogController.heroHealth).toEqual(actualHealth);
	});

	it("sends initial hero species information to dogController", function() {
		var actualSpecies = dogGameService.mainHero.species;
		dogGameService.initHeroInfo();
		expect(dogController.speciesType).toEqual(actualSpecies);
	});

	it("sends initial hero class information to dogController", function() {
		var actualClassType = dogGameService.mainHero.classType;
		dogGameService.initHeroInfo();
		expect(dogController.classType).toEqual(actualClassType);
	});

	it("sends a debug message", function() {
		var testValue = "turtled debug message";
		var actual = dogGameService.sendDebugMessage(testValue);
		expect(actual).toEqual(true);
	});

	it("sends a debug message to dogController", function() {
		var testValue = "turtle debug soup dog controller";
		var actual = dogGameService.sendDebugMessage(testValue);
		expect(actual).toEqual(true);
		expect(dogController.debugMessages).toEqual([testValue]);
	});

	it("sends three debug messages to dogController", function() {
		var testValue01 = "turtle debug soup dog controller1";
		var testValue02 = "turtle debug soup dog controller2";
		var testValue03 = "turtle debug soup dog controller3";
		dogGameService.sendDebugMessage(testValue01);
		dogGameService.sendDebugMessage(testValue02);
		var actual = dogGameService.sendDebugMessage(testValue03);
		expect(actual).toEqual(true);
		expect(dogController.debugMessages).toEqual([testValue03, testValue02, testValue01]);
	});
	
	it("sends a level update message", function() {
		var testValue = 69;
		var actual = dogGameService.changeLevelMessage(testValue);
		expect(actual).toEqual(true);
	});

	it("sends a level update message to dogController", function() {
		var testValue = 420;
		var actual = dogGameService.changeLevelMessage(testValue);
		expect(dogController.level).toEqual(testValue);

	});
	
	it("sends an enemyCount message", function() {
		var testValue = 3;
		var actual = dogGameService.enemyCountMessage(testValue);
		expect(actual).toEqual(true);
	});
	
	it("sends an enemyCount update message to dogController", function() {
		var testValue = 12;
		var actual = dogGameService.enemyCountMessage(testValue);
		expect(dogController.enemyCount).toEqual(testValue);
	});
	
	it("sends a hydrant health message", function() {
		var testValue = 8;
		var actual = dogGameService.sendHydrantHealthMessage(testValue);
		expect(actual).toEqual(true);
	});
	
	it("sends a hydrant health message to dogController", function() {
		var testValue = "hydrant health update message";
		var actual = dogGameService.sendHydrantHealthMessage(testValue);
		expect(actual).toEqual(true);
		expect(dogController.hydrantHealth).toEqual(testValue);
	});

	it("sends a change direction message", function() {
		var testValue = "turtle changed direction message";
		var actual = dogGameService.changeDirectionMessage(testValue);
		expect(actual).toEqual(true);
	});

	it("sends a change direction message to dogController", function() {
		var testValue = "turtle soup in dog controller";
		var actual = dogGameService.changeDirectionMessage(testValue);
		expect(actual).toEqual(true);
		expect(dogController.direction).toEqual(testValue);
	});
	
	it("reports an encounter", function() {
		var testValue = 'encounter message';
		var actual = dogGameService.reportEncounterMessage(testValue);
		expect(actual).toEqual(true);
	});

	it("sends an encounter message to dogController", function() {
		var testValue = 'encounter message';
		var actual = dogGameService.reportEncounterMessage(testValue);
		expect(dogController.encounterMessages[0].message).toEqual(testValue);
	});
	
	it("sends a score points message", function() {
		var testValue = 8675309;
		var actual = dogGameService.scorePointsMessage(testValue);
		expect(actual).toEqual(true);
	});

	it("sends a score points message to dogController", function() {
		var testValue = 5000;
		var actual = dogGameService.scorePointsMessage(testValue);
		expect(dogController.points).toEqual(testValue);
	});

});

