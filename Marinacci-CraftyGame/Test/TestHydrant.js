/**
 * @author Charlie
 */

describe("Test hydrant", function() {'use strict';
		
	var hydrant = null;
	
	beforeEach(function() {
		module('hydrantMod');				
	});
	
	beforeEach(inject(function($injector) {
		hydrant = $injector.get('hydrant');
	}));
	
	it("can get a hydrant template", function()  {
		var actual = hydrant;
		expect(actual).toNotEqual(null);
	});
	
	it("can make a hydrant", function()  {
		var actualHydrant = hydrant.hydrant();
		expect(actualHydrant.health).toEqual(2);
		expect(actualHydrant.damage).toEqual(2);
	});
});