/**
 * @author Charlie Calvert
 */

// specs code
describe("Test Dog Controller", function() {'use strict';
	var dogController = null;	
	
	beforeEach(function() {
		module('dogPlayer');			
	});
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		dogController = $rootScope.$new();		
		$controller('DogController', { $scope: dogController});
	}));
	
	/*
	it("checks player name", function() {
		var actual = dogController.name;		
		expect(actual).toEqual('');
	});	
	*/
	
	it("checks debug messages", function() {
		var actual = dogController.debugMessages;		
		expect(actual).toEqual([]);
	});
	
	it("checks move Messages", function() {
		var actual = dogController.moveMessages;		
		expect(actual).toEqual([]);
	});
	it("checks species name", function(){
		var actual = dogController.speciesName;		
		expect(actual).toEqual("");
	});
});

