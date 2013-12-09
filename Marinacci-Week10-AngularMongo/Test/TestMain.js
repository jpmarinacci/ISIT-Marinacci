/**
 * @author Charlie Calvert
 */

describe("Test Main", function() {'use strict';
	var mainController = null;	
	
	beforeEach(function() {
		module('mainModule');			
	});
	
	beforeEach(inject(function($rootScope, $controller, $injector) {
		mainController = $rootScope.$new();		
		$controller('mainController', { $scope: mainController});		
	}));

	it("Check Name", function() {
		var actual = mainController.name;		
		expect(actual).toEqual('mainController');
	});	
		
});

