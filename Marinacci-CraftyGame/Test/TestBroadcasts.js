/**
 * @author Charlie Calvert
 */

describe("Test Broadcasts: gameEventService", function() {'use strict';
	var dogController = null;	
	var gameEventService = null;
	
	beforeEach(function() {
		module('dogPlayer');			
	});
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		dogController = $rootScope.$new();		
		$controller('DogController', { $scope: dogController});
		gameEventService = $injector.get('gameEventService');
		
	}));
	
	it("Change Direction Broadcast", function() {
		var testValue = "Test Change Direction Broadcast";
		gameEventService.changeDirectionBroadcast(testValue);
		var actual = dogController.moveMessages;			
		expect(actual).toEqual([testValue]);
	});
	
	it("Test Two Direction Broadcasts", function() {
		var testValue01 = 'Test';
		var testValue02 = 'Direction';
		gameEventService.changeDirectionBroadcast(testValue01);
		gameEventService.changeDirectionBroadcast(testValue02);
		var actual = dogController.moveMessages;			
		expect(actual).toEqual([testValue02, testValue01]);
	});
	
	it("Tests a Debug Broadcast", function() {
		gameEventService.debugBroadcast("Qux");
		var actual = dogController.debugMessages;			
		expect(actual).toEqual(['Qux']);
	});
	
	it("Two Debug Broadcast", function() {
		gameEventService.debugBroadcast("Qux");
		gameEventService.debugBroadcast("QuxFoo");
		var actual = dogController.debugMessages;			
		expect(actual).toEqual(['QuxFoo', 'Qux']);
	});
	
	it("Tests Encounter Broadcast", function() {
		gameEventService.encounterBroadcast("Encounter");
		var actual = dogController.encounterMessages[0].message;			
		expect(actual).toEqual('Encounter');
	});
	
});