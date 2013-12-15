/**
 * @author Charlie Calvert / JP
 */

// specs code
describe("Test Dog Controller", function() {'use strict';
	var dogController = null;
	//var editNameController = null;
	var dialog = null;
	
	var fakeDialog = {
            open: function()
            {
                return {
                    then: function(callback) {
                        callback("userName");
                    }
                };
            }
        };

	beforeEach(function() {
		module('dogPlayer');
		module('ui.bootstrap.dialog');
	});

	beforeEach(inject(function($rootScope, $controller, $dialog) {
		dogController = $rootScope.$new();
		$controller('DogController', {
			$scope : dogController
		});
		spyOn($dialog, 'dialog').andReturn(fakeDialog);
		//editNameController = $rootScope.$new();
		//$controller('EditNameController',{
			//$scope : editNameController
		//});
	}));

	it("checks player name", function() {
		var actual = dogController.name;
		expect(actual).toEqual("Fido");
	});

	it("checks species type", function() {
		var actual = dogController.speciesType;
		expect(actual).toEqual("");
	});
	
	it("checks level", function() {
		var actual = dogController.level;
		expect(actual).toEqual(1);
	});
	
	it("checks debug messages", function() {
		var actual = dogController.debugMessages;
		expect(actual).toEqual([]);
	});

	it("checks move Messages", function() {
		var actual = dogController.moveMessages;
		expect(actual).toEqual([]);
	});
	
	it("calls inputName and returns a value to controller", function(){
		dogController.inputName(dogController.name);
		var actual = dogController.name; 
		expect(actual).toEqual("userName");
	});
	
	/*
	it("", function() {
		dogController.inputName("FunkyBob");
		var actualPlayerName = editNameController.playerName;
		expect(actualPlayerName).toEqual("FunkyBob");
	});
	*/
});

