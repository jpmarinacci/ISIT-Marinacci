/**
 * @author Charlie Calvert
 */

// specs code
describe("TestDogController", function() {'use strict';
	var dogController = null;	
	
	beforeEach(function() {
		module('dogPlayer');			
	});
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		dogController = $rootScope.$new();		
		$controller('DogController', { $scope: dogController});		
		
	}));
	/*
	it("Check Name", function() {
		var actual = dogController.name;		
		expect(actual).toEqual('DogPlayer');
	});	
	
	it("Check Event Note", function() {
		var actual = dogController.eventNote;		
		expect(actual).toEqual('no messages');
	});
	
	it("Check Debug Messages", function() {
		var actual = dogController.debugMessages;		
		expect(actual).toEqual([]);
	});
	
	it("Check move Messages", function() {
		var actual = dogController.moveMessages;		
		expect(actual).toEqual([]);
	});
	*/
});

