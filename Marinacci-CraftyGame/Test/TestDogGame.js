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
		$controller('DogController', { $scope: dogController});
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
		var width=16;
		var tileWidth=48;
		var expectedWidth =width*tileWidth;
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
		var height=10;
		var tileHeight=48;
		var expectedHeight = height*tileHeight;
		var actualHeight = dogGameService.height();
		expect(actualHeight).toEqual(expectedHeight);
	});
	
	
	it("registers a new enemy with the enemys array", function() {
		var actual = dogGameService.newEnemy({});
		expect(actual).toEqual(1);	
	});
	/*
	it("simulates an encounter", function() {
		var actual = dogGameService.encounter({ hydrant: { hitPoints: 25 } });
		expect(actual).toBe(false);
	});
	it("simulates an encounter hydrant end", function() {
		var actual = dogGameService.encounter({ hydrant: { hitPoints: 0 } });
		expect(actual).toBe(true);
	});
	
	it("simulates a food encounter", function() {
		var actual = dogGameService.encounterFood({ }, 0);
		expect(actual).toBe(true);
	});
	
	/*
	it("simulates going left", function() {
		var actual = dogGameService.goLeft();
		expect(actual).toBe(true);
	});
	
	it("simulates call stop move", function() {
		var actual = dogGameService.stopMove();
		expect(actual).toBe(true);
	}); */
	/*
	it("reports an event", function() {
		var actual = dogGameService.reportEvent();
		expect(actual).toEqual(true);
	});

	it("sends a change direction message", function() {
		var testValue = "turtled change direction message";
		var actual = dogGameService.changeDirectionMessage(testValue);
		expect(actual).toEqual(true);
	});

	it("sends a change direction message to dogcontroller", function() {
		var testValue = "turtle soup in dog controller";
		var actual = dogGameService.changeDirectionMessage(testValue);
		expect(actual).toEqual(true);
		expect(dogController.eventNote).toEqual(testValue);
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
	
	it("is a very silly test", function() {
		expect(true).toBe(true);
	});
	*/
});

